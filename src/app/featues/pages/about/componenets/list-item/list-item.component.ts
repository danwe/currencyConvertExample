import { Component } from '@angular/core';
import { ItemService } from 'src/app/core/services/items.service';
import { Item } from '../../../../../core/models/const/item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  itemList : Array<Item> = [];

  displayedColumns: string[] = ['id', 'user', 'currFrom','currTo','dateUpdate', 'value', 'valueConvert' ];

  constructor( private itemsService: ItemService,) {}
  ngOnInit() {
    this.itemsService.getAllItems().subscribe(data => {
     // this.origList = data;
      this.itemList  = data;
    })
  }
}
