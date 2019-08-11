import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle : string = 'Product detail '
  errorMsg : string;
  product : IProduct;
  constructor(private route : ActivatedRoute,
              private router : Router,
              private productService : ProductService) {

   }

  ngOnInit() {    
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(id).subscribe(
      data => this.product = data,
      err => this.errorMsg = <any>err);

    //this.pageTitle += `${id}`
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
