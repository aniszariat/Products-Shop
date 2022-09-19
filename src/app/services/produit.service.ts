import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { categrie } from '../model.ts/categorie';
import { produit } from '../model.ts/produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  categories: categrie[]; //tableau de categorie
  produits: produit[]; //tableau de produit

  constructor() {
    (this.categories = [new categrie(1, 'PC'), new categrie(2, 'Imprimante')]),
      (this.produits = [
        new produit(1, 'PC Asus', 3000.6, new Date('01/14/2011'), {
          idCat: 1,
          nomCat: 'PC',
        }),
        new produit(
          2,
          'Imprimante Epson',
          450,
          new Date('12/17/2010'),
          this.categories[1]
        ),
        new produit(3, 'Tablette Samsung', 900.123, new Date('02/20/2020'), {
          idCat: 1,
          nomCat: 'PC',
        }),
      ]);
  }

  ajouterProduit(prod) {
    this.produits.push(prod);
  }

  lsiteProduits() {
    return this.produits;
  }

  listeCategories() {
    return this.categories;
  }
  consulterCtagorie(id) {
    return this.categories.find((c) => c.idCat == id);
  }
  supprimerProduit(p) {
    //supprimer le produit prod du tableau produits
    this.produits.forEach((e, i) => {
      if (e.idProduit === p.idProduit) this.produits.splice(i, 1);
    });
  }

  consulterProduit(id) {
    return this.produits.find((p) => p.idProduit == id);
  }
  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      }
      if (n1.idProduit < n2.idProduit) {
        return -1;
      }
      return 0;
    });
  }

  updateProduit(p) {
    // console.log(p);
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }

  searchProduitByCat(idCat) {
    return this.produits.filter((p) => {
      return p.categorie.idCat == idCat;
    });
  }
  /*
  rechercherParCategorie(idCat: number): Produit[] {
    this.produitsRecherche = [];
    this.produits.forEach((cur, index) => {
      if (idCat == cur.categorie.idCat) {
        console.log('cur ' + cur);
        this.produitsRecherche.push(cur);
      }
    });
    return this.produitsRecherche;
  }
  */
}
