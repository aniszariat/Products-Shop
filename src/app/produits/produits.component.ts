import { Component, OnInit } from '@angular/core';
import { produit } from '../model.ts/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  produits: produit[];

  constructor(private prodServ: ProduitService) {
    this.produits = this.prodServ.lsiteProduits();
  }

  ngOnInit(): void {}
  supprimerProduit(p) {
    console.log(p);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      this.prodServ.supprimerProduit(p);
      console.log('le produit est supprimé');
    }
  }
}
