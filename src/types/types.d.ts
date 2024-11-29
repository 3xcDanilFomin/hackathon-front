export interface ITypeProfession {
  id: number;
  imgPath: string;
  title: string;
  description: string;
}

export interface IProfessionLink {
  id: number;
  imgPath: string;
  title: string;
  urlPath: string;
}

export interface IQuestion {
  id: string;
  text: string;
  relatedField: string;
}

export interface IDirection {
  label: string;
  value: string;
  questions: IQuestion[];
}

export interface ITest {
  humanHuman: IDirection[];
  humanSystem: IDirection[];
  humanTechnology: IDirection[];
  humanNature: IDirection[];
  humanArt: IDirection[];
}

export interface IUniversitie {
  id: string;
  name: string;
  link: string;
}

export interface ISpecialization {
  id: string;
  name: string;
  label: string;
  description: string;
  imgPath: string;
  universities: IUniversitie[];
}

export interface ISpecializations {
  psychologist: ISpecialization;
  sociologist: ISpecialization;
  teacher: ISpecialization;
  doctor: ISpecialization;
  conflictologist: ISpecialization;
  linguist: ISpecialization;
  journalist: ISpecialization;
  editor: ISpecialization;
  graphicDesigner: ISpecialization;
  editor: ISpecialization;
  copywriter: ISpecialization;
  programmer: ISpecialization;
  engineer: ISpecialization;
  mechanicalTechnician: ISpecialization;
  electrician: ISpecialization;
  architect: ISpecialization;
  ecologist: ISpecialization;
  landscapeDesigner: ISpecialization;
  agronomist: ISpecialization;
  geographer: ISpecialization;
  artist: ISpecialization;
  musician: ISpecialization;
  director: ISpecialization;
  dancer: ISpecialization;
  sculptor: ISpecialization;
  biologist: ISpecialization;
}
