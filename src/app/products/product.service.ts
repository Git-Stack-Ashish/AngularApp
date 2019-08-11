import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import {catchError, tap, map} from 'rxjs/operators'

@Injectable({
    providedIn : 'root'
})
export class ProductService{

    private productUrl = 'api/products/products.json';
    constructor(private http : HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id : number): Observable<IProduct | undefined>{
        
        return this.getProducts().pipe(
            map((data : IProduct[]) => data.find(d => d.productId === id))
        );
    }

    handleError(err : HttpErrorResponse){
        var errorMsg = '';

        errorMsg = 'Server return code: ${err.status}, error msg is ${err.message}';

        return throwError(errorMsg);
    }
}