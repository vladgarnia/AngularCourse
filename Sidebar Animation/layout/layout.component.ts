import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "@app/core";
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
  selector: "app-main",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
  animations: [
    trigger("scrollButton", [
      state("scrollable", style({
        bottom: "30px"
      })),
      transition("* => scrollable", animate("0.175s ease-out")),
      transition("scrollable => *", animate("0.175s ease-out"))
    ])]
})
export class LayoutComponent {

  @ViewChild("sidenavContent")
  sidenavContent: ElementRef;

  pageName: string;
  routeName: string;

  constructor() { }


  canScrollToTop = false;

  scrollToTop(): void {
    this.sidenavContent.nativeElement
      .scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
  }

  onContentScroll(): void {
    this.canScrollToTop = this.sidenavContent.nativeElement.scrollTop > 0;
  }
}
