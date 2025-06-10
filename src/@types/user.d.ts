export interface IEmailAddress {
  email_address: string;
}

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  created_at: string;
  updated_at: string;
  image_url: string;
  profile_image_url: string;
  email_addresses: IEmailAddress[];
  lattesUrl: string;
}
