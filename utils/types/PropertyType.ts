export type PropertyType = {
  id: string;
  title: string;
  images: string[];
  createdAt: string;
  propertyFor: `rent` | `sell`;
  description: {
    overall: string;
    priceAndTaskHistory: {
      price: string;
    },
    location: {
      city: string;
    }
  }
}

