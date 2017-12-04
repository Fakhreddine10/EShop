import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../../category.service";
import { ProductService } from "../../product.service";
import { Router, ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/take'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent{
 categories$;
 product ={};
 id;
  constructor(private router:Router,private route:ActivatedRoute,private categoryService:CategoryService,private productService:ProductService) { 
    this.categories$=categoryService.getCategories();
    console.log(this.categories$);
    this.id=this.route.snapshot.paramMap.get('id');
    if(this.id){
     this.productService.get(this.id).take(1).subscribe(p => this.product=p);
    console.log(this.product);
    console.log(this.id);
    }
  }

  save(product){
    this.productService.create(product);
    this.router.navigateByUrl('/admin/products');
  }

}
