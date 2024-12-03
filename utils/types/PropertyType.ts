export type PropertyType = {
  id: string;
  title: string;
  images: string[];
  createdAt: string;
  propertyFor: `rent` | `sell`;
  propertyHas: {
    beds: number;
    bathrooms: number;
  };
  propertyArea: number;
  description: {
    overall: string;
    priceAndTaskHistory: {
      price: string;
    },
    location: {
      city: string;
      country: string;
    }
  }
}

