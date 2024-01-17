import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { Good } from '../../model/good';
import { GoodsService } from '../../services/goods.service';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-goods-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './goods-list.component.html',
  styleUrl: './goods-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoodsListComponent implements OnInit {
  
  public goodsList?: Good[];
  public goodSelected?: Good;

  private goodsService = inject(GoodsService);

  private router = inject(Router);
  private confirmationService = inject(ConfirmationService);
  private messageService = inject(MessageService);

  ngOnInit(): void {
    this.getGoodsList()  
  } 

  getGoodsList():void {
    this.goodsService.getGoods()
      .subscribe( resp => {
        this.goodsList = resp;
      }
      )
    }

  }