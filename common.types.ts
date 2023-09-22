export interface initData {
  service: string;
  nama: string;
  email: string;
  jurusan: string;
  whatsapp: string;
  deadline: string;
  catatan: string;
}

export interface ServiceData {
  data: {
    id: number;
    thumbnail: string;
    tagline: string;
    title: string;
    desc: string;
    package: {
      title: string;
      id: number;
      category_id: number;
      benefit: {}[];
      price: number;
    }[];
  }[];
  type?: string;
}

export interface PackageData {
  pack: {
    title: string;
    id: number;
    category_id: number;
    benefit: string;
    price: number;
  }[];
}
