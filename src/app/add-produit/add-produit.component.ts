import { Component, OnInit } from '@angular/core';
import { produit } from '../model.ts/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  idp:number

  constructor(private prodServ : ProduitService)   {} 

  ngOnInit(): void {
    this.idp=this.prodServ.lsiteProduits().length+1
  }

  addProduit(newp: produit){
    newp.idProduit = this.idp
    this.prodServ.ajouterProduit(newp)
    console.log('added produit',newp);
    console.log("liste produits", this.prodServ.lsiteProduits());
    
  }

}
