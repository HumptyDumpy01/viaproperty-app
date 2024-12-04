export type PropertyType = {
  id: string;
  title: string;
  images: string[];
  createdAt: string;
  propertyFor: `rent` | `sell`;
  additionalConveniences: string[];
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
      location: {
        coordinates: [number, number];
      }
    }
  }
}

