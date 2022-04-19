import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/model/products';
import { ProductServiceService } from 'src/app/service/product-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Products
  id: number;

  constructor(private route: ActivatedRoute,private router: Router,
    private productService: ProductServiceService) { }

  ngOnInit() {
   
  
      this.id = this.route.snapshot.params['id'];
      
      this.productService.getProductByID(this.id)
        .subscribe(data => {
          console.log(data)
          this.product = data;
        }, error => console.log(error));
    }
  
}
