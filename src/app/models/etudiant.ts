import {IEtudiant} from "./ietudiant";

export class Etudiant implements IEtudiant {
  constructor(
    public _nom: string,
    public _prenom: string,
    public _rue: string,
    public _cp: string,
    public _ville: string,
    public _courriel: string,
    public _genre: string,
    public _age: number,
    public _idCand: number
  ) {}

  public getNom(): string {
    return this._nom;
  }

  public setNom(value: string) {
    this._nom = value;
  }

  public getPrenom(): string {
    return this._prenom;
  }

  public setPrenom(value: string) {
    this._prenom = value;
  }

  public getRue(): string {
    return this._rue;
  }

  public setRue(value: string) {
    this._rue = value;
  }

  public getCp(): string {
    return this._cp;
  }

  public setCp(value: string) {
    this._cp = value;
  }

  public getVille(): string {
    return this._ville;
  }

  public setVille(value: string) {
    this._ville = value;
  }

  public getCourriel(): string {
    return this._courriel;
  }

  public setCourriel(value: string) {
    this._courriel = value;
  }

  public getGenre(): string {
    return this._genre;
  }

  public setGenre(value: string) {
    this._genre = value;
  }

  public getAge(): number {
    return this._age;
  }

  public setAge(value: number) {
    this._age = value;
  }

  public getIdCand(): number {
    return this._idCand;
  }

  public setIdCand(value: number) {
    this._idCand = value;
  }
}
