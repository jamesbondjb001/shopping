import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { LoginComponent } from './login/login.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { BuyProductsComponent } from './categories/buy-products/buy-products.component';
import { BuyProductsHeaderComponent } from './categories/buy-products/buy-products-header/buy-products-header.component';
import { TransactionsHistComponent } from './transactions-hist/transactions-hist.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { UploadProductsComponent } from './sell-products/upload-products/upload-products.component';
import { UploadProductsListComponent } from './sell-products/upload-products-list/upload-products-list.component';
import { ProductComponent } from './categories/buy-products/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    LoginComponent,
    CategoriesComponent,
    CategoryListComponent,
    BuyProductsComponent,
    BuyProductsHeaderComponent,
    TransactionsHistComponent,
    SellProductsComponent,
    UploadProductsComponent,
    UploadProductsListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
