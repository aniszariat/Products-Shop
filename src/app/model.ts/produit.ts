import { categrie } from './categorie';

export class produit {
  constructor(
    public idProduit: number,
    public nomProduit: string,
    public prixProduit: number,
    public dateCreation: Date,
    public categorie: categrie
  ) {}
}
