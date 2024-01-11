export class Currency {
  result :string = '';
  documentation :string = '';
  terms_of_use  :string = '';
  time_last_update_unix :number = 0;
  time_last_update_utc :string = '';
  time_next_update_unix:number = 0;
  time_next_update_utc :string = '';
  base_code: string = '';
  conversion_rates: object = {};
}
