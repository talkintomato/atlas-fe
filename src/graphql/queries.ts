// menuQueries.ts
import { gql } from '@apollo/client';

export const GET_MENU_QUERY = gql`
  query GetMenu($id: ID!) {
    menu(id: $id) {
      id
      label
      sections {
        id
        label
        isAvailable
        description
        displayOrder
        items {
          id
          label
          isAvailable
          link
          description
          price
          displayOrder
        }
      }
    }
  }
`;

export interface MenuItem {
  id: string;
  label: string;
  isAvailable: boolean;
  link: string;
  description: string;
  price: string;
  displayOrder: number;
}

export interface MenuSection {
  id: string;
  label: string;
  isAvailable: boolean;
  description: string;
  items: MenuItem[]; 
  displayOrder: number;
}

export interface MenuData {
  menu: {
    id: string;
    label: string;
    sections: MenuSection[];
  };
}

export interface MenuVars {
  id: string;
}
