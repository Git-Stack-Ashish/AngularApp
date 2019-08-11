import {Component, OnInit} from "@angular/core";
import { IProduct } from './product'
import { ProductService } from "./product.service";

@Component({
    selector:'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    
    title:string ='';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage : boolean = false;

    _listFilter : string;
    errorMessage: string;

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value : string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.filteredResult(this.listFilter) : this.products;
    }

    filteredProducts : IProduct[];
    

    products : IProduct[];

//     products : IProduct[] = [
//     {
//         "productId" : 1,
//         "productName" : "product1",
//         "productCode" : "C-01",
//         "releaseDate" : "Jan 10, 2011",
//         "price" : 10, 
//         "starRating" : 4,
//         "imageUrl": "https://www.kleintools.com/sites/all/product_assets/resized/250x250/klein/1005_insalt.jpg"
//     },
//     {
//         "productId" : 2,
//         "productName" : "product2",
//         "productCode" : "C-02",
//         "releaseDate" : "Jan 20, 2011",
//         "price" : 20,
//         "starRating" : 3,
//         "imageUrl": "http://cliparts.co/cliparts/qiB/Xo9/qiBXo9XLT.jpg"
//     },
//     {
//         "productId" : 3,
//         "productName" : "product3",
//         "productCode" : "C-03",
//         "releaseDate" : "Jan 30, 2011",
//         "price" : 30,
//         "starRating" : 5,
//         "imageUrl": "https://www.homedepot.ca/content/dam/homedepot/images/categories/tools/landing-page/nov-2018-clp-tools-drywall-tools.jpg"
//     },
// ];

constructor(private _productService: ProductService){
     
}

filteredResult(filterBy : string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((p : IProduct) =>
        p.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
}

onNotify(msg : string): void{
    this.title = msg;   
}

ngOnInit(): void {
    this._productService.getProducts()
        .subscribe(
            data => {
                this.products = data;
                this.filteredProducts = this.products;
            },
            err => this.errorMessage = <any>err
        );
    // this.filteredProducts = this.products;    
}

toggleImage() : void{
    this.showImage = !this.showImage;
};

}