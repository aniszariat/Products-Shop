import { Injectable } from '@angular/core';
import { produit } from '../model.ts/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: produit[]

  constructor() {this.produits = [
    new produit(1,'PC Asus',3000.6,new Date('01/14/2011')),
    new produit(2,'Imprimante Epson',450, new Date('12/17/2010')),
    new produit(3,'Tablette Samsung',900.123,new Date('02/20/2020')),
  ]; }

  lsiteProduits(){
    return this.produits
  }
  ajouterProduit(prod){
    this.produits.push(prod);
  }
}
