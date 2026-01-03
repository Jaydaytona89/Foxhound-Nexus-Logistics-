
import { Page } from './App';

export interface PageProps {
  navigate: (page: Page) => void;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  pickupZip?: string;
  deliveryZip?: string;
  timeWindow?: string;
  packageSize?: string;
  timeSensitivity?: string;
  notes?: string;
}
