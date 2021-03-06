import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  Type,
  ComponentRef,
  OnDestroy,
  OnInit
} from '@angular/core';

import { WindowScrollingService } from 'src/app/core/services/window-scrolling.service';

import { Modal } from './modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('modalContainer', { read: ViewContainerRef, static: false })
  private modalContainer: ViewContainerRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private windowScrolling: WindowScrollingService
  ) { }

  ngOnInit() {
    this.windowScrolling.disable();
  }

  createModal<T extends Modal>(component: Type<T>): ComponentRef<T> {
    this.modalContainer.clear();

    const factory: ComponentFactory<T> = this.componentFactoryResolver.resolveComponentFactory(component);

    return this.modalContainer.createComponent(factory, 0);
  }

  ngOnDestroy() {
    this.windowScrolling.enable();
  }
}
