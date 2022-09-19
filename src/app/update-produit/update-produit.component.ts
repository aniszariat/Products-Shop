import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { produit } from '../model.ts/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [],
})
export class UpdateProduitComponent implements OnInit {
  currentProduit: produit;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private prodServ: ProduitService
  ) {}

  ngOnInit(): void {
    this.currentProduit = this.prodServ.consulterProduit(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentProduit);
  }

  updateProduit() {
    //console.log(this.currentProduit);
    this.prodServ.updateProduit(this.currentProduit);
    this.router.navigateByUrl('produits');
  }
}
