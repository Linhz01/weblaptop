import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categories } from 'src/app/model/categories';
import { CateNews } from 'src/app/model/catenews';
import { CategoryServiceService } from 'src/app/service/category-service.service';
import { NewsServiceService } from 'src/app/service/news-service.service';

@Component({
  selector: 'app-categorymanager',
  templateUrl: './categorymanager.component.html',
  styleUrls: ['./categorymanager.component.css']
})
export class CategorymanagerComponent implements OnInit {
  p: number = 1;
  q: number = 1;
  public category: Categories[];
  public catenew: CateNews[];
  public editCategories: Categories;
  public deleteCategories: Categories;
  public editCategoryNews: CateNews;
  public deleteCategoryNews: CateNews;

  constructor(
    private categoryService: CategoryServiceService,
    private newService: NewsServiceService,

  ) { }

  ngOnInit(): void {
    this.getCategory();
    this.getCateNew();
  }
  //


  // Category
  public getCategory(): void {
    this.categoryService.getCategory().subscribe(
      (response: Categories[]) => {
        this.category = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCategory(addForm: NgForm): void {
    this.categoryService.adtCategory(addForm.value).subscribe(
      (response: Categories) => {
        console.log(response);
        this.getCategory();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        
      }
    );
  }

  public onUpdateCategory(category: Categories): void {
    this.categoryService.updattCategory(category).subscribe(
      (response: Categories) => {
        console.log(response);
        this.getCategory();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  

  public onDeleteCategory(productId: number): void {
    this.categoryService.delettCategory(productId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCategory();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

// CateNew
public getCateNew(): void {
  this.newService.getCategoryNew().subscribe(
    (response: CateNews[]) => {
      this.catenew = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onAddCateNew(addFormx: NgForm): void {
  this.newService.addCategoryNew(addFormx.value).subscribe(
    (response: CateNews) => {
      console.log(response);
      this.getCateNew();
      addFormx.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      
    }
  );
}

public onUpdateCateNew(catenew: CateNews): void {
  this.newService.updateCategoryNew(catenew).subscribe(
    (response: CateNews) => {
      console.log(response);
      this.getCateNew();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onDeleteCateNew(productId: number): void {
  this.newService.deleteCategoryNew(productId).subscribe(
    (response: void) => {
      console.log(response);
      this.getCateNew();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}
  


  public onOpenModalEdit(categories: Categories, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCateModal');
    }
    if (mode === 'edit') {
      this.editCategories = categories;
      button.setAttribute('data-target', '#updateCateModal');
    }
    if (mode === 'delete') {
      this.deleteCategories = categories;
      button.setAttribute('data-target', '#deleteCateModal');

    }
    container.appendChild(button);
    button.click();
    
}

    public onOpenModalEditNew(catenew: CateNews, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'addnew') {
      button.setAttribute('data-target', '#addCateNewModal');
    }
    if (mode === 'editnew') {
      this.editCategoryNews = catenew;
      button.setAttribute('data-target', '#updateCateNewModal');
    }
    if (mode === 'delete') {
      this.deleteCategoryNews = catenew;
      button.setAttribute('data-target', '#deleteCateNewModal');
    }
    container.appendChild(button);
    button.click();
    
}
}
