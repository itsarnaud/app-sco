import { ISpecialite } from "./ispecialite";

export class Specialite implements ISpecialite {
  constructor(
    public _libelle: string,
    public _idSpec: number
  ) {}

  public getLibelle(): string {
    return this._libelle;
  }

  public setLibelle(value: string) {
    this._libelle = value;
  }

  public getIdSpec(): number {
    return this._idSpec;
  }

  public setIdSpec(value: number) {
    this._idSpec = value;
  }
}
