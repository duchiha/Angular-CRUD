import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  pageTitle:string="Product Detail";
  product:IProduct;
  msgError:string;

  constructor(private route:ActivatedRoute, private router:Router,
     private productService:ProductService) { }

  ngOnInit() {
    let id =+this.route.snapshot.paramMap.get('id');
    this.pageTitle += ` :${id}`;
    this.productService.getProduct(id).subscribe({
      next:product => this.product=product,
      error:err => this.msgError=err
    })
  }
  onBack():void{
  this.router.navigate(['/products']);
  }

}
