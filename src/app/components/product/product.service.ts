import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	baseUrl = "http://localhost:3001/products";

	constructor(private snackbar: MatSnackBar, private http: HttpClient) {

	}

	showMessage(msg: string, isError: boolean = false): void {
		this.snackbar.open(msg, 'X', {
			duration: 3000,
			horizontalPosition: "right",
			verticalPosition: "top",
			panelClass: isError ? ['msg-error'] : ['msg-success']
		});
	}

	errorHandler(e: any): Observable<any> {
		console.log(e);
		this.showMessage('Ocorreu um Erro!', true);
		return EMPTY;
	}

	create(product: Product): Observable<Product> {
		return this.http.post<Product>(this.baseUrl, product).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	read(): Observable<Product[]> {
		return this.http.get<Product[]>(this.baseUrl).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	readById(id: string): Observable<Product> {
		const URL = `${this.baseUrl}/${id}`
		return this.http.get<Product>(URL).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	update(product: Product): Observable<Product> {
		const URL = `${this.baseUrl}/${product.id}`
		return this.http.put<Product>(URL, product).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}

	delete(id: string): Observable<Product> {
		const URL = `${this.baseUrl}/${id}`
		return this.http.delete<Product>(URL).pipe(
			map(obj => obj),
			catchError(e => this.errorHandler(e))
		)
	}
}