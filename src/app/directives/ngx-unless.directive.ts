import { Directive, EmbeddedViewRef, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngxUnless]'
})
export class NgxUnlessDirective {

  visible = false;

  // Inject custom directive template
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  //  If condition false, instantiate template using EmbeddedViewRef & template 
      // else remove ng-template from the ui
        // visible conditional used if visible flag is set to false (use case: if already rendered to ui stop it duplicating ng-template)
  @Input()
  set ngxUnless(condition: boolean) {
    if(!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    }
    else if(condition && this.visible) {;
      this.viewContainer.clear()
      this.visible = false;
    }
  }

}
