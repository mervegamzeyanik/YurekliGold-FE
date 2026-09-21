import {
  Divider,
  DividerModule
} from "./chunk-YTELNMYA.js";
import {
  Documentation
} from "./chunk-IGI4ASA3.js";
import {
  Dialog,
  DialogModule,
  InputNumber,
  InputNumberModule,
  Select,
  SelectModule,
  Table,
  TableModule,
  Tag,
  TagModule,
  Textarea,
  TextareaModule
} from "./chunk-YSQJOFZ7.js";
import {
  AppFloatingConfigurator,
  AuthService,
  Qr,
  StyleClass,
  StyleClassModule
} from "./chunk-DCRRSTZX.js";
import {
  LayoutService,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling
} from "./chunk-QGPJTLIS.js";
import {
  Button,
  ButtonDirective,
  ButtonModule,
  Checkbox,
  CheckboxModule,
  CommonModule,
  Component,
  DecimalPipe,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  FormsModule,
  Injectable,
  Input,
  InputText,
  InputTextModule,
  MinValidator,
  NgClass,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  Output,
  Ripple,
  RippleModule,
  SelectControlValueAccessor,
  Subject,
  __spreadProps,
  __spreadValues,
  computed,
  effect,
  filter,
  inject,
  input,
  provideHttpClient,
  providePrimeNG,
  provideZonelessChangeDetection,
  setClassMetadata,
  signal,
  takeUntil,
  withFetch,
  ɵNgSelectMultipleOption,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵanimateEnter,
  ɵɵanimateLeave,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GG7T3RYJ.js";

// src/app/layout/component/app.topbar.ts
var _c0 = (a0, a1) => ({ "pi ": true, "pi-moon": a0, "pi-sun": a1 });
var AppTopbar = class _AppTopbar {
  layoutService = inject(LayoutService);
  authService = inject(AuthService);
  router = inject(Router);
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => __spreadProps(__spreadValues({}, state), {
      darkTheme: !state.darkTheme
    }));
  }
  logout() {
    this.authService.logout();
    this.router.navigateByUrl("/auth/login");
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], decls: 34, vars: 5, consts: [[1, "layout-topbar"], [1, "layout-topbar-logo-container"], [1, "layout-menu-button", "layout-topbar-action", 3, "click"], [1, "pi", "pi-bars"], ["routerLink", "/", 1, "layout-topbar-logo"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "layout-topbar-actions"], ["type", "button", "aria-label", "Tema de\u011Fi\u015Ftir", 1, "layout-topbar-action", 3, "click"], [3, "ngClass"], [1, "relative"], ["type", "button", "pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", "aria-label", "Kullan\u0131c\u0131 men\xFCs\xFC", 1, "layout-topbar-action", 3, "hideOnOutsideClick"], [1, "pi", "pi-user"], [1, "layout-topbar-menu", "hidden"], [1, "layout-topbar-menu-content"], [1, "px-4", "py-3"], [1, "font-semibold"], [1, "text-sm", "text-muted-color"], ["routerLink", "/users", 1, "layout-topbar-action"], [1, "pi", "pi-users"], ["type", "button", 1, "layout-topbar-action", 3, "click"], [1, "pi", "pi-sign-out"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        return ctx.layoutService.onMenuToggle();
      });
      \u0275\u0275element(3, "i", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 4);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(5, "svg", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementStart(7, "mask", 7);
      \u0275\u0275element(8, "path", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "g", 9);
      \u0275\u0275element(10, "path", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Y\xDCREKL\u0130 CRM");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 11)(14, "button", 12);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_14_listener() {
        return ctx.toggleDarkMode();
      });
      \u0275\u0275element(15, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 14)(17, "button", 15);
      \u0275\u0275element(18, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 17)(20, "div", 18)(21, "div", 19)(22, "div", 20);
      \u0275\u0275text(23, "Demo Kullan\u0131c\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 21);
      \u0275\u0275text(25, "demo@crm.local");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "a", 22);
      \u0275\u0275element(27, "i", 23);
      \u0275\u0275elementStart(28, "span");
      \u0275\u0275text(29, "Kullan\u0131c\u0131lar");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "button", 24);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_30_listener() {
        return ctx.logout();
      });
      \u0275\u0275element(31, "i", 25);
      \u0275\u0275elementStart(32, "span");
      \u0275\u0275text(33, "\xC7\u0131k\u0131\u015F yap");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(15);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c0, ctx.layoutService.isDarkTheme(), !ctx.layoutService.isDarkTheme()));
      \u0275\u0275advance(2);
      \u0275\u0275property("hideOnOutsideClick", true);
    }
  }, dependencies: [RouterModule, RouterLink, CommonModule, NgClass, StyleClassModule, StyleClass], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{
      selector: "app-topbar",
      standalone: true,
      imports: [RouterModule, CommonModule, StyleClassModule],
      template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <span>Y\xDCREKL\u0130 CRM</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()" aria-label="Tema de\u011Fi\u015Ftir">
                <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
            </button>

            <div class="relative">
                <button
                    type="button"
                    class="layout-topbar-action"
                    pStyleClass="@next"
                    enterFromClass="hidden"
                    enterActiveClass="animate-scalein"
                    leaveToClass="hidden"
                    leaveActiveClass="animate-fadeout"
                    [hideOnOutsideClick]="true"
                    aria-label="Kullan\u0131c\u0131 men\xFCs\xFC"
                >
                    <i class="pi pi-user"></i>
                </button>
                <div class="layout-topbar-menu hidden">
                    <div class="layout-topbar-menu-content">
                        <div class="px-4 py-3">
                            <div class="font-semibold">Demo Kullan\u0131c\u0131</div>
                            <div class="text-sm text-muted-color">demo@crm.local</div>
                        </div>
                        <a class="layout-topbar-action" routerLink="/users">
                            <i class="pi pi-users"></i>
                            <span>Kullan\u0131c\u0131lar</span>
                        </a>
                        <button type="button" class="layout-topbar-action" (click)="logout()">
                            <i class="pi pi-sign-out"></i>
                            <span>\xC7\u0131k\u0131\u015F yap</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/component/app.topbar.ts", lineNumber: 79 });
})();

// src/app/layout/component/app.menuitem.ts
var _c02 = ["app-menuitem", ""];
var _c1 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
var _forTrack0 = ($index, $item) => $item == null ? null : $item.label;
function AppMenuitem_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item().label);
  }
}
function AppMenuitem_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AppMenuitem_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function AppMenuitem_Conditional_1_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppMenuitem_Conditional_1_Conditional_4_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item().class);
    \u0275\u0275attribute("href", ctx_r0.item().url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item().target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChildren() ? 4 : -1);
  }
}
function AppMenuitem_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 7);
  }
}
function AppMenuitem_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function AppMenuitem_Conditional_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 5);
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, AppMenuitem_Conditional_2_Conditional_4_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item().class)("routerLink", ctx_r0.item().routerLink)("routerLinkActiveOptions", ctx_r0.item().routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c1))("fragment", ctx_r0.item().fragment)("queryParamsHandling", ctx_r0.item().queryParamsHandling)("preserveFragment", ctx_r0.item().preserveFragment)("skipLocationChange", ctx_r0.item().skipLocationChange)("replaceUrl", ctx_r0.item().replaceUrl)("state", ctx_r0.item().state)("queryParams", ctx_r0.item().queryParams);
    \u0275\u0275attribute("target", ctx_r0.item().target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item().label);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hasChildren() ? 4 : -1);
  }
}
function AppMenuitem_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 10);
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r5["badgeClass"]);
    \u0275\u0275property("item", child_r5)("parentPath", ctx_r0.fullPath())("root", false);
  }
}
function AppMenuitem_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275animateLeave(function AppMenuitem_Conditional_3_Template_animateleave_cb() {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView("p-submenu-leave");
    });
    \u0275\u0275animateEnter(function AppMenuitem_Conditional_3_Template_animateenter_cb() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.initialized() ? "p-submenu-enter" : null);
    });
    \u0275\u0275repeaterCreate(1, AppMenuitem_Conditional_3_For_2_Template, 1, 5, "li", 9, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("layout-root-submenulist", ctx_r0.root());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item().items);
  }
}
var AppMenuitem = class _AppMenuitem {
  layoutService = inject(LayoutService);
  router = inject(Router);
  item = input(null, ...ngDevMode ? [{ debugName: "item" }] : []);
  root = input(false, ...ngDevMode ? [{ debugName: "root" }] : []);
  parentPath = input(null, ...ngDevMode ? [{ debugName: "parentPath" }] : []);
  isVisible = computed(() => this.item()?.visible !== false, ...ngDevMode ? [{ debugName: "isVisible" }] : []);
  hasChildren = computed(() => this.item()?.items && this.item()?.items.length > 0, ...ngDevMode ? [{ debugName: "hasChildren" }] : []);
  hasRouterLink = computed(() => !!this.item()?.routerLink, ...ngDevMode ? [{ debugName: "hasRouterLink" }] : []);
  fullPath = computed(() => {
    const itemPath = this.item()?.path;
    if (!itemPath)
      return this.parentPath();
    const parent = this.parentPath();
    if (parent && !itemPath.startsWith(parent)) {
      return parent + itemPath;
    }
    return itemPath;
  }, ...ngDevMode ? [{ debugName: "fullPath" }] : []);
  isActive = computed(() => {
    const activePath = this.layoutService.layoutState().activePath;
    if (this.item()?.path) {
      return activePath?.startsWith(this.fullPath() ?? "") ?? false;
    }
    return false;
  }, ...ngDevMode ? [{ debugName: "isActive" }] : []);
  initialized = signal(false, ...ngDevMode ? [{ debugName: "initialized" }] : []);
  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      if (this.item()?.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    if (this.item()?.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initialized.set(true);
    });
  }
  updateActiveStateFromRoute() {
    const item = this.item();
    if (!item?.routerLink)
      return;
    const isRouteActive = this.router.isActive(item.routerLink[0], {
      paths: "exact",
      queryParams: "ignored",
      matrixParams: "ignored",
      fragment: "ignored"
    });
    if (isRouteActive) {
      const parentPath = this.parentPath();
      if (parentPath) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: parentPath
        }));
      }
    }
  }
  itemClick(event) {
    const item = this.item();
    if (item?.disabled) {
      event.preventDefault();
      return;
    }
    if (item?.command) {
      item.command({ originalEvent: event, item });
    }
    if (this.hasChildren()) {
      if (this.isActive()) {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: this.parentPath()
        }));
      } else {
        this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
          activePath: this.fullPath(),
          menuHoverActive: true
        }));
      }
    } else {
      this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
        overlayMenuActive: false,
        staticMenuMobileActive: false,
        mobileMenuActive: false,
        menuHoverActive: false
      }));
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("active-menuitem", ctx.isActive())("layout-root-menuitem", ctx.root());
    }
  }, inputs: { item: [1, "item"], root: [1, "root"], parentPath: [1, "parentPath"] }, attrs: _c02, decls: 4, vars: 4, consts: [[1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "ngClass"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], [3, "layout-root-submenulist"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["app-menuitem", "", 3, "item", "parentPath", "root", "class"], ["app-menuitem", "", 3, "item", "parentPath", "root"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, AppMenuitem_Conditional_0_Template, 2, 1, "div", 0);
      \u0275\u0275conditionalCreate(1, AppMenuitem_Conditional_1_Template, 5, 6, "a", 1);
      \u0275\u0275conditionalCreate(2, AppMenuitem_Conditional_2_Template, 5, 15, "a", 2);
      \u0275\u0275conditionalCreate(3, AppMenuitem_Conditional_3_Template, 3, 2, "ul", 3);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.root() && ctx.isVisible() ? 0 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((!ctx.hasRouterLink() || ctx.hasChildren()) && ctx.isVisible() ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasRouterLink() && !ctx.hasChildren() && ctx.isVisible() ? 2 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hasChildren() && ctx.isVisible() && (ctx.root() || ctx.isActive()) ? 3 : -1);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple], styles: ["\n\n.p-submenu-enter[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_p-animate-submenu-expand 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n.p-submenu-leave[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_p-animate-submenu-collapse 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n@keyframes _ngcontent-%COMP%_p-animate-submenu-expand {\n  from {\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    max-height: 1000px;\n    overflow: visible;\n  }\n}\n@keyframes _ngcontent-%COMP%_p-animate-submenu-collapse {\n  from {\n    max-height: 1000px;\n    overflow: hidden;\n  }\n  to {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=app.menuitem.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{ selector: "[app-menuitem]", imports: [CommonModule, RouterModule, RippleModule], template: `
        @if (root() && isVisible()) {
            <div class="layout-menuitem-root-text">{{ item().label }}</div>
        }
        @if ((!hasRouterLink() || hasChildren()) && isVisible()) {
            <a [attr.href]="item().url" (click)="itemClick($event)" [ngClass]="item().class" [attr.target]="item().target" tabindex="0" pRipple>
                <i [ngClass]="item().icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item().label }}</span>
                @if (hasChildren()) {
                    <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                }
            </a>
        }
        @if (hasRouterLink() && !hasChildren() && isVisible()) {
            <a
                (click)="itemClick($event)"
                [ngClass]="item().class"
                [routerLink]="item().routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item().routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item().fragment"
                [queryParamsHandling]="item().queryParamsHandling"
                [preserveFragment]="item().preserveFragment"
                [skipLocationChange]="item().skipLocationChange"
                [replaceUrl]="item().replaceUrl"
                [state]="item().state"
                [queryParams]="item().queryParams"
                [attr.target]="item().target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item().icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item().label }}</span>
                @if (hasChildren()) {
                    <i class="pi pi-fw pi-angle-down layout-submenu-toggler"></i>
                }
            </a>
        }
        @if (hasChildren() && isVisible() && (root() || isActive())) {
            <ul [animate.enter]="initialized() ? 'p-submenu-enter' : null" [animate.leave]="'p-submenu-leave'" [class.layout-root-submenulist]="root()">
                @for (child of item().items; track child?.label) {
                    <li app-menuitem [item]="child" [parentPath]="fullPath()" [root]="false" [class]="child['badgeClass']"></li>
                }
            </ul>
        }
    `, host: {
      "[class.active-menuitem]": "isActive()",
      "[class.layout-root-menuitem]": "root()"
    }, styles: ["/* angular:styles/component:scss;81b3f56aa5c0a1e79fa32137518cb4a874606c9757504cd30f0dc0ac0cf23067;C:/Git/YurekliGoldFE/src/app/layout/component/app.menuitem.ts */\n.p-submenu-enter {\n  animation: p-animate-submenu-expand 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n.p-submenu-leave {\n  animation: p-animate-submenu-collapse 450ms cubic-bezier(0.86, 0, 0.07, 1) forwards;\n}\n@keyframes p-animate-submenu-expand {\n  from {\n    max-height: 0;\n    overflow: hidden;\n  }\n  to {\n    max-height: 1000px;\n    overflow: visible;\n  }\n}\n@keyframes p-animate-submenu-collapse {\n  from {\n    max-height: 1000px;\n    overflow: hidden;\n  }\n  to {\n    max-height: 0;\n    overflow: hidden;\n  }\n}\n/*# sourceMappingURL=app.menuitem.css.map */\n"] }]
  }], () => [], { item: [{ type: Input, args: [{ isSignal: true, alias: "item", required: false }] }], root: [{ type: Input, args: [{ isSignal: true, alias: "root", required: false }] }], parentPath: [{ type: Input, args: [{ isSignal: true, alias: "parentPath", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/component/app.menuitem.ts", lineNumber: 95 });
})();

// src/app/layout/component/app.menu.ts
var _forTrack02 = ($index, $item) => $item.label;
function AppMenu_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 1);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("item", item_r1)("root", true);
  }
}
function AppMenu_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 2);
  }
}
function AppMenu_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AppMenu_For_2_Conditional_0_Template, 1, 2, "li", 1)(1, AppMenu_For_2_Conditional_1_Template, 1, 0, "li", 2);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(!item_r1.separator ? 0 : 1);
  }
}
var AppMenu = class _AppMenu {
  model = [];
  ngOnInit() {
    this.model = [
      {
        label: "CRM",
        items: [
          { label: "Dashboard", icon: "pi pi-fw pi-home", routerLink: ["/"] },
          { label: "M\xFC\u015Fteriler", icon: "pi pi-fw pi-building", routerLink: ["/customers"] },
          { label: "Kullan\u0131c\u0131lar", icon: "pi pi-fw pi-users", routerLink: ["/users"] },
          { label: "Tamir \u0130\u015Flemleri", icon: "pi pi-fw pi-wrench", routerLink: ["/repairs"] }
        ]
      },
      {
        label: "Kuyumcu Tan\u0131mlar\u0131",
        items: [{ label: "\u0130\u015F\xE7ilik Tan\u0131mlar\u0131", icon: "pi pi-fw pi-money-bill", routerLink: ["/labors"] }]
      }
    ];
  }
  static \u0275fac = function AppMenu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenu)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], decls: 3, vars: 0, consts: [[1, "layout-menu"], ["app-menuitem", "", 3, "item", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275repeaterCreate(1, AppMenu_For_2_Template, 2, 1, null, null, _forTrack02);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.model);
    }
  }, dependencies: [CommonModule, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, AppMenuitem, RouterModule],
      template: `<ul class="layout-menu">
        @for (item of model; track item.label) {
            @if (!item.separator) {
                <li app-menuitem [item]="item" [root]="true"></li>
            } @else {
                <li class="menu-separator"></li>
            }
        }
    </ul> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/component/app.menu.ts", lineNumber: 21 });
})();

// src/app/layout/component/app.sidebar.ts
var AppSidebar = class _AppSidebar {
  layoutService = inject(LayoutService);
  router = inject(Router);
  el = inject(ElementRef);
  outsideClickListener = null;
  destroy$ = new Subject();
  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (this.layoutService.isDesktop()) {
        if (state.overlayMenuActive) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      } else {
        if (state.mobileMenuActive) {
          this.bindOutsideClickListener();
        } else {
          this.unbindOutsideClickListener();
        }
      }
    });
  }
  ngOnInit() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this.destroy$)).subscribe((event) => {
      const navEvent = event;
      this.onRouteChange(navEvent.urlAfterRedirects);
    });
    this.onRouteChange(this.router.url);
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.unbindOutsideClickListener();
  }
  onRouteChange(path) {
    this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
      activePath: path,
      overlayMenuActive: false,
      staticMenuMobileActive: false,
      mobileMenuActive: false,
      menuHoverActive: false
    }));
  }
  bindOutsideClickListener() {
    if (!this.outsideClickListener) {
      this.outsideClickListener = (event) => {
        if (this.isOutsideClicked(event)) {
          this.layoutService.layoutState.update((val) => __spreadProps(__spreadValues({}, val), {
            overlayMenuActive: false,
            staticMenuMobileActive: false,
            mobileMenuActive: false,
            menuHoverActive: false
          }));
        }
      };
      document.addEventListener("click", this.outsideClickListener);
    }
  }
  unbindOutsideClickListener() {
    if (this.outsideClickListener) {
      document.removeEventListener("click", this.outsideClickListener);
      this.outsideClickListener = null;
    }
  }
  isOutsideClicked(event) {
    const topbarButtonEl = document.querySelector(".topbar-start > button");
    const sidebarEl = this.el.nativeElement;
    return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarButtonEl?.isSameNode(event.target) || topbarButtonEl?.contains(event.target));
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 2, vars: 0, consts: [[1, "layout-sidebar"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-menu");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [AppMenu, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{
      selector: "app-sidebar",
      standalone: true,
      imports: [AppMenu, RouterModule],
      template: `
        <div class="layout-sidebar">
            <app-menu></app-menu>
        </div>
    `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/component/app.sidebar.ts", lineNumber: 17 });
})();

// src/app/layout/component/app.footer.ts
var AppFooter = class _AppFooter {
  static \u0275fac = function AppFooter_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppFooter)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], decls: 4, vars: 0, consts: [[1, "layout-footer"], [1, "text-muted-color"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, "Y\xFCrekli CRM ");
      \u0275\u0275domElementStart(2, "span", 1);
      \u0275\u0275text(3, "\xA9 2026");
      \u0275\u0275domElementEnd()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFooter, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-footer",
      template: `<div class="layout-footer">Y\xFCrekli CRM <span class="text-muted-color">\xA9 2026</span></div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "src/app/layout/component/app.footer.ts", lineNumber: 8 });
})();

// src/app/layout/component/app.layout.ts
var AppLayout = class _AppLayout {
  layoutService = inject(LayoutService);
  constructor() {
    effect(() => {
      const state = this.layoutService.layoutState();
      if (state.mobileMenuActive) {
        document.body.classList.add("blocked-scroll");
      } else {
        document.body.classList.remove("blocked-scroll");
      }
    });
  }
  containerClass = computed(() => {
    const config = this.layoutService.layoutConfig();
    const state = this.layoutService.layoutState();
    return {
      "layout-overlay": config.menuMode === "overlay",
      "layout-static": config.menuMode === "static",
      "layout-static-inactive": state.staticMenuDesktopInactive && config.menuMode === "static",
      "layout-overlay-active": state.overlayMenuActive,
      "layout-mobile-active": state.mobileMenuActive
    };
  }, ...ngDevMode ? [{ debugName: "containerClass" }] : []);
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass());
    }
  }, dependencies: [CommonModule, NgClass, AppTopbar, AppSidebar, RouterModule, RouterOutlet, AppFooter], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter],
      template: `<div class="layout-wrapper" [ngClass]="containerClass()">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask"></div>
    </div> `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/component/app.layout.ts", lineNumber: 25 });
})();

// src/app/pages/jewelry/repair-state.service.ts
var RepairStateService = class _RepairStateService {
  customerOptions = ["AL\u0130 \xD6ZCAN", "ALTINKENT", "ARZU PIRLANTA", "ATASAY ARENA PARK", "ATE\u015E SARRAF\u0130YE"];
  userOptions = ["Demo Kullan\u0131c\u0131", "Ay\u015Fe Karaca", "Mehmet Can", "Zeynep Arslan"];
  productOptions = ["Alt\u0131n y\xFCz\xFCk", "Alt\u0131n bileklik", "Alt\u0131n kolye", "Alt\u0131n k\xFCpe", "G\xFCm\xFC\u015F y\xFCz\xFCk", "G\xFCm\xFC\u015F bileklik", "G\xFCm\xFC\u015F kolye", "P\u0131rlanta y\xFCz\xFCk", "P\u0131rlanta k\xFCpe", "\xC7eyrek alt\u0131n", "Kolye ucu"];
  metalTypes = ["Alt\u0131n", "G\xFCm\xFC\u015F"];
  labors = [
    { id: 1, name: "Kaynak i\u015F\xE7ili\u011Fi", price: 350 },
    { id: 2, name: "Cila i\u015F\xE7ili\u011Fi", price: 250 },
    { id: 3, name: "Ta\u015F takma i\u015F\xE7ili\u011Fi", price: 500 },
    { id: 4, name: "\xD6l\xE7\xFC k\xFC\xE7\xFCltme", price: 300 },
    { id: 5, name: "\xD6l\xE7\xFC b\xFCy\xFCtme", price: 350 },
    { id: 6, name: "Lehim i\u015F\xE7ili\u011Fi", price: 300 },
    { id: 7, name: "Kilit de\u011Fi\u015Fimi", price: 275 },
    { id: 8, name: "Klips de\u011Fi\u015Fimi", price: 225 },
    { id: 9, name: "Zincir tamiri", price: 325 },
    { id: 10, name: "M\u0131hlama i\u015F\xE7ili\u011Fi", price: 650 },
    { id: 11, name: "Ta\u015F s\xF6kme i\u015F\xE7ili\u011Fi", price: 400 },
    { id: 12, name: "Ta\u015F parlatma", price: 300 },
    { id: 13, name: "Y\xFCzey d\xFCzeltme", price: 275 },
    { id: 14, name: "Kaplama i\u015F\xE7ili\u011Fi", price: 550 },
    { id: 15, name: "\u0130sim yazma", price: 450 },
    { id: 16, name: "\xDCr\xFCn temizleme", price: 150 },
    { id: 17, name: "Bileklik k\u0131saltma", price: 300 },
    { id: 18, name: "Kolye k\u0131saltma", price: 325 },
    { id: 19, name: "K\xFCpe tamiri", price: 250 },
    { id: 20, name: "Ayar kontrol\xFC", price: 200 }
  ];
  records = signal([
    {
      id: 1001,
      customer: "AL\u0130 \xD6ZCAN",
      broughtBy: "Ay\u015Fe Karaca",
      products: [{ name: "Alt\u0131n bileklik", quantity: 1 }],
      description: "Kopuk zincir kaynak yap\u0131lacak",
      labor: [{ id: 1, name: "Kaynak i\u015F\xE7ili\u011Fi", price: 350, quantity: 1 }],
      preciousMetals: [{ id: 1, type: "Alt\u0131n", grams: 1.25 }],
      status: "Ba\u015Flad\u0131",
      createdAt: "20.09.2026 10:15"
    },
    {
      id: 1e3,
      customer: "ARZU PIRLANTA",
      broughtBy: "Demo Kullan\u0131c\u0131",
      products: [{ name: "P\u0131rlanta y\xFCz\xFCk", quantity: 1 }],
      description: "Ta\u015F kontrol\xFC ve cila",
      labor: [{ id: 2, name: "Cila i\u015F\xE7ili\u011Fi", price: 250, quantity: 1 }],
      preciousMetals: [],
      status: "Tamamland\u0131",
      createdAt: "19.09.2026 14:40"
    },
    {
      id: 999,
      customer: "ALTINKENT",
      broughtBy: "Mehmet Can",
      products: [{ name: "Alt\u0131n y\xFCz\xFCk", quantity: 1 }],
      description: "",
      labor: [{ id: 3, name: "Ta\u015F takma i\u015F\xE7ili\u011Fi", price: 500, quantity: 1 }],
      preciousMetals: [{ id: 2, type: "Alt\u0131n", grams: 0.85 }],
      status: "Ba\u015Flad\u0131",
      createdAt: "19.09.2026 11:25"
    },
    { id: 998, customer: "ATASAY ARENA PARK", broughtBy: "Ay\u015Fe Karaca", products: [{ name: "G\xFCm\xFC\u015F kolye", quantity: 1 }], description: "", labor: [{ id: 4, name: "\xD6l\xE7\xFC k\xFC\xE7\xFCltme", price: 300, quantity: 1 }], preciousMetals: [], status: "Ba\u015Flad\u0131", createdAt: "18.09.2026 16:05" },
    {
      id: 997,
      customer: "ATE\u015E SARRAF\u0130YE",
      broughtBy: "Demo Kullan\u0131c\u0131",
      products: [{ name: "Alt\u0131n k\xFCpe", quantity: 1 }],
      description: "",
      labor: [
        { id: 2, name: "Cila i\u015F\xE7ili\u011Fi", price: 250, quantity: 1 },
        { id: 1, name: "Kaynak i\u015F\xE7ili\u011Fi", price: 350, quantity: 1 }
      ],
      preciousMetals: [{ id: 3, type: "G\xFCm\xFC\u015F", grams: 2.4 }],
      status: "Tamamland\u0131",
      createdAt: "18.09.2026 13:10"
    },
    { id: 996, customer: "AL\u0130 \xD6ZCAN", broughtBy: "Mehmet Can", products: [{ name: "Kolye ucu", quantity: 1 }], description: "", labor: [{ id: 1, name: "Kaynak i\u015F\xE7ili\u011Fi", price: 350, quantity: 1 }], preciousMetals: [], status: "Ba\u015Flad\u0131", createdAt: "17.09.2026 15:45" },
    {
      id: 995,
      customer: "ARZU PIRLANTA",
      broughtBy: "Ay\u015Fe Karaca",
      products: [{ name: "P\u0131rlanta k\xFCpe", quantity: 1 }],
      description: "",
      labor: [{ id: 3, name: "Ta\u015F takma i\u015F\xE7ili\u011Fi", price: 500, quantity: 1 }],
      preciousMetals: [],
      status: "Tamamland\u0131",
      createdAt: "17.09.2026 09:30"
    }
  ], ...ngDevMode ? [{ debugName: "records" }] : []);
  add(record) {
    this.records.update((records) => [record, ...records]);
  }
  update(record) {
    this.records.update((records) => records.map((item) => item.id === record.id ? record : item));
  }
  static \u0275fac = function RepairStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepairStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RepairStateService, factory: _RepairStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepairStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/jewelry/repair-dialog.ts
var _c03 = () => ({ width: "min(72rem, 96vw)" });
var _c12 = () => ({ "max-height": "78vh", overflow: "auto" });
var _c2 = () => ({ width: "min(28rem, 94vw)" });
var _forTrack03 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.id;
function RepairDialog_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function RepairDialog_For_8_Template_button_click_0_listener() {
      const customer_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.draft.customer = customer_r3);
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275element(2, "i", 49);
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customer_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary/10", ctx_r3.draft.customer === customer_r3)("border-primary", ctx_r3.draft.customer === customer_r3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(customer_r3);
  }
}
function RepairDialog_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275listener("click", function RepairDialog_For_14_Template_button_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.draft.broughtBy = user_r6);
    });
    \u0275\u0275elementStart(1, "span", 48);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary/10", ctx_r3.draft.broughtBy === user_r6)("border-primary", ctx_r3.draft.broughtBy === user_r6);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(user_r6);
  }
}
function RepairDialog_For_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function RepairDialog_For_21_Template_button_click_0_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addProduct(product_r8));
    });
    \u0275\u0275element(1, "i", 53);
    \u0275\u0275elementStart(2, "span", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(product_r8);
  }
}
function RepairDialog_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55)(4, "button", 56);
    \u0275\u0275listener("click", function RepairDialog_For_37_Template_button_click_4_listener() {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeProductQuantity(product_r10, -1));
    });
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function RepairDialog_For_37_Template_input_ngModelChange_6_listener($event) {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(product_r10.quantity, $event) || (product_r10.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function RepairDialog_For_37_Template_button_click_7_listener() {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeProductQuantity(product_r10, 1));
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-button", 59);
    \u0275\u0275listener("onClick", function RepairDialog_For_37_Template_p_button_onClick_9_listener() {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeProduct(product_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(product_r10.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", product_r10.quantity);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
  }
}
function RepairDialog_ForEmpty_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Hen\xFCz \xFCr\xFCn eklenmedi.");
    \u0275\u0275elementEnd();
  }
}
function RepairDialog_For_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 60);
    \u0275\u0275listener("click", function RepairDialog_For_45_Template_button_click_0_listener() {
      const labor_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addLabor(labor_r12));
    });
    \u0275\u0275elementStart(1, "span", 61);
    \u0275\u0275element(2, "i", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 63);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 64);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const labor_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary/10", ctx_r3.hasLabor(labor_r12))("opacity-50", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(labor_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(7, 7, labor_r12.price, "1.2-2"), " TL");
  }
}
function RepairDialog_For_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "div", 66)(2, "span", 67);
    \u0275\u0275element(3, "i", 68);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 50);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 69)(7, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function RepairDialog_For_53_Template_input_ngModelChange_7_listener($event) {
      const metalType_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.metalDraft.gramsByType[metalType_r14], $event) || (ctx_r3.metalDraft.gramsByType[metalType_r14] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-button", 71);
    \u0275\u0275listener("onClick", function RepairDialog_For_53_Template_p_button_onClick_8_listener() {
      const metalType_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addMetal(metalType_r14));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metalType_r14 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-50", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(metalType_r14);
    \u0275\u0275advance(2);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate1("", metalType_r14, " gram"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.metalDraft.gramsByType[metalType_r14]);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
  }
}
function RepairDialog_ng_template_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "K\u0131ymetli maden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 35);
    \u0275\u0275text(4, "Gram");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "th", 72);
    \u0275\u0275elementEnd();
  }
}
function RepairDialog_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "p-button", 73);
    \u0275\u0275listener("onClick", function RepairDialog_ng_template_57_Template_p_button_onClick_7_listener() {
      const metal_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeMetal(metal_r16));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metal_r16 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metal_r16.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, metal_r16.grams, "1.3-3"), " gr");
  }
}
function RepairDialog_ng_template_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 74);
    \u0275\u0275text(2, "Bu tamir i\xE7in k\u0131ymetli maden eklenmedi.");
    \u0275\u0275elementEnd()();
  }
}
function RepairDialog_For_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "span", 54);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55)(4, "button", 56);
    \u0275\u0275listener("click", function RepairDialog_For_88_Template_button_click_4_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeLaborQuantity(item_r18, -1));
    });
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function RepairDialog_For_88_Template_input_ngModelChange_6_listener($event) {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(item_r18.quantity, $event) || (item_r18.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 58);
    \u0275\u0275listener("click", function RepairDialog_For_88_Template_button_click_7_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeLaborQuantity(item_r18, 1));
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputnumber", 76);
    \u0275\u0275twoWayListener("ngModelChange", function RepairDialog_For_88_Template_p_inputnumber_ngModelChange_9_listener($event) {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      \u0275\u0275twoWayBindingSet(item_r18.price, $event) || (item_r18.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 77);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 78);
    \u0275\u0275listener("onClick", function RepairDialog_For_88_Template_p_button_onClick_13_listener() {
      const item_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeLabor(item_r18));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(item_r18.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r18.quantity);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", item_r18.price);
    \u0275\u0275property("min", 0)("disabled", ctx_r3.draft.status === "Tamamland\u0131");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 12, item_r18.price * (item_r18.quantity || 1), "1.2-2"), " TL");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r3.draft.status === "Tamamland\u0131");
  }
}
function RepairDialog_ForEmpty_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, "Hen\xFCz i\u015F\xE7ilik se\xE7ilmedi.");
    \u0275\u0275elementEnd();
  }
}
function RepairDialog_ng_template_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "p-button", 80);
    \u0275\u0275listener("onClick", function RepairDialog_ng_template_90_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openReceipt());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 48)(3, "p-button", 81);
    \u0275\u0275listener("onClick", function RepairDialog_ng_template_90_Template_p_button_onClick_3_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.close());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 82);
    \u0275\u0275listener("onClick", function RepairDialog_ng_template_90_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r3.canPrintReceipt);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r3.editingId !== null);
  }
}
function RepairDialog_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", product_r20.quantity);
  }
}
function RepairDialog_ForEmpty_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function RepairDialog_For_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const labor_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", labor_r21.name, " x", labor_r21.quantity || 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 3, labor_r21.price * (labor_r21.quantity || 1), "1.2-2"), " TL");
  }
}
function RepairDialog_ForEmpty_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function RepairDialog_For_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 44)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metal_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metal_r22.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, metal_r22.grams, "1.3-3"), " gr");
  }
}
function RepairDialog_ForEmpty_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 45);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function RepairDialog_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 83);
    \u0275\u0275listener("onClick", function RepairDialog_ng_template_128_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.receiptVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 84);
    \u0275\u0275listener("onClick", function RepairDialog_ng_template_128_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.printReceipt());
    });
    \u0275\u0275elementEnd();
  }
}
var RepairDialog = class _RepairDialog {
  repairState;
  visible = false;
  visibleChange = new EventEmitter();
  editingId = null;
  draft;
  saveRepair = new EventEmitter();
  title = "Tamir ba\u015Flat";
  customerOptions;
  userOptions;
  productOptions;
  labors;
  metalTypes;
  metalDraft = { id: 0, type: "Alt\u0131n", grams: 0, gramsByType: { Alt\u0131n: 0, G\u00FCm\u00FC\u015F: 0 } };
  receiptVisible = false;
  productSearch = "";
  laborSearch = "";
  constructor(repairState) {
    this.repairState = repairState;
    this.customerOptions = repairState.customerOptions;
    this.userOptions = repairState.userOptions;
    this.productOptions = repairState.productOptions;
    this.labors = repairState.labors;
    this.metalTypes = repairState.metalTypes;
  }
  laborTotal(repair) {
    return repair.labor.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
  }
  productTotal(repair) {
    return repair.products.reduce((total, item) => total + item.quantity, 0);
  }
  laborCount(repair) {
    return repair.labor.reduce((total, item) => total + (item.quantity ?? 1), 0);
  }
  metalTotal(repair) {
    return repair.preciousMetals.reduce((total, item) => total + item.grams, 0);
  }
  get filteredProducts() {
    const query = this.productSearch.trim().toLocaleLowerCase("tr-TR");
    return query ? this.productOptions.filter((product) => product.toLocaleLowerCase("tr-TR").includes(query)) : this.productOptions;
  }
  get filteredLabors() {
    const query = this.laborSearch.trim().toLocaleLowerCase("tr-TR");
    return query ? this.labors.filter((labor) => labor.name.toLocaleLowerCase("tr-TR").includes(query)) : this.labors;
  }
  get canPrintReceipt() {
    return this.draft.products.length > 0 || this.draft.labor.length > 0 || this.draft.preciousMetals.length > 0;
  }
  hasLabor(labor) {
    return this.draft.labor.some((item) => item.id === labor.id);
  }
  addLabor(labor) {
    if (this.draft.status === "Tamamland\u0131")
      return;
    const selectedLabor = this.draft.labor.find((item) => item.id === labor.id);
    this.draft.labor = selectedLabor ? this.draft.labor.map((item) => item.id === labor.id ? __spreadProps(__spreadValues({}, item), { quantity: (item.quantity ?? 1) + 1 }) : item) : [...this.draft.labor, __spreadProps(__spreadValues({}, labor), { quantity: 1 })];
  }
  addProduct(product) {
    if (this.draft.status !== "Tamamland\u0131") {
      const selectedProduct = this.draft.products.find((item) => item.name === product);
      this.draft.products = selectedProduct ? this.draft.products.map((item) => item.name === product ? __spreadProps(__spreadValues({}, item), { quantity: item.quantity + 1 }) : item) : [...this.draft.products, { name: product, quantity: 1 }];
    }
  }
  removeProduct(product) {
    if (this.draft.status !== "Tamamland\u0131") {
      this.draft.products = this.draft.products.filter((item) => item.name !== product.name);
    }
  }
  changeProductQuantity(product, amount) {
    if (this.draft.status !== "Tamamland\u0131") {
      product.quantity = Math.max(1, (product.quantity || 1) + amount);
    }
  }
  removeLabor(labor) {
    this.draft.labor = this.draft.labor.filter((item) => item.id !== labor.id);
  }
  changeLaborQuantity(labor, amount) {
    if (this.draft.status !== "Tamamland\u0131") {
      labor.quantity = Math.max(1, (labor.quantity ?? 1) + amount);
    }
  }
  addMetal(type) {
    const grams = this.metalDraft.gramsByType[type] ?? 0;
    if (this.draft.status !== "Tamamland\u0131" && grams > 0) {
      this.draft.preciousMetals = [...this.draft.preciousMetals, { id: Date.now(), type, grams }];
      this.metalDraft.gramsByType[type] = 0;
    }
  }
  removeMetal(metal) {
    this.draft.preciousMetals = this.draft.preciousMetals.filter((item) => item.id !== metal.id);
  }
  close() {
    this.visibleChange.emit(false);
  }
  openReceipt() {
    if (!this.canPrintReceipt)
      return;
    this.receiptVisible = true;
  }
  printReceipt() {
    if (!this.canPrintReceipt)
      return;
    const receiptWindow = window.open("", "_blank", "width=360,height=720");
    if (!receiptWindow)
      return;
    const products = this.draft.products.map((item) => `<li>${item.name} <strong>x${item.quantity}</strong></li>`).join("");
    const labors = this.draft.labor.map((item) => `<li>${item.name} x${item.quantity ?? 1}<span>${(item.price * (item.quantity ?? 1)).toLocaleString("tr-TR", { minimumFractionDigits: 2 })} TL</span></li>`).join("");
    const metals = this.draft.preciousMetals.map((item) => `<li>${item.type}<span>${item.grams.toLocaleString("tr-TR", { minimumFractionDigits: 3, maximumFractionDigits: 3 })} gr</span></li>`).join("");
    receiptWindow.document.write(`
            <!doctype html>
            <html lang="tr">
                <head>
                    <meta charset="utf-8">
                    <title>Tamir Fi\u015Fi</title>
                    <style>
                        @page { size: 80mm auto; margin: 0; }
                        * { box-sizing: border-box; }
                        body { width: 72mm; margin: 0 auto; padding: 4mm 0; color: #111; font: 12px/1.4 Arial, sans-serif; }
                        h1 { margin: 0 0 2mm; text-align: center; font-size: 16px; }
                        .muted { color: #555; text-align: center; }
                        .line { border-top: 1px dashed #222; margin: 3mm 0; }
                        .row, li { display: flex; justify-content: space-between; gap: 8px; }
                        ul { list-style: none; padding: 0; margin: 1mm 0; }
                        li { margin: 1mm 0; }
                        .total { font-size: 14px; font-weight: 700; }
                    </style>
                </head>
                <body>
                    <h1>TAM\u0130R F\u0130\u015E\u0130</h1>
                    <div class="muted">${this.draft.customer || "-"}</div>
                    <div class="row"><span>Getiren</span><strong>${this.draft.broughtBy || "-"}</strong></div>
                    <div class="line"></div>
                    <strong>\xDCr\xFCnler</strong><ul>${products || "<li>-</li>"}</ul>
                    <div class="line"></div>
                    <strong>\u0130\u015F\xE7ilikler</strong><ul>${labors || "<li>-</li>"}</ul>
                    <div class="line"></div>
                    <strong>K\u0131ymetli madenler</strong><ul>${metals || "<li>-</li>"}</ul>
                    <div class="line"></div>
                    <div class="row total"><span>\u0130\u015F\xE7ilik toplam\u0131</span><span>${this.laborTotal(this.draft).toLocaleString("tr-TR", { minimumFractionDigits: 2 })} TL</span></div>
                </body>
            </html>
        `);
    receiptWindow.document.close();
    receiptWindow.focus();
    receiptWindow.print();
    receiptWindow.close();
  }
  save() {
    if (!this.draft.customer.trim() || !this.draft.broughtBy.trim() || !this.draft.products.length)
      return;
    this.saveRepair.emit(this.draft);
  }
  static \u0275fac = function RepairDialog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepairDialog)(\u0275\u0275directiveInject(RepairStateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepairDialog, selectors: [["app-repair-dialog"]], inputs: { visible: "visible", editingId: "editingId", draft: "draft", title: "title" }, outputs: { visibleChange: "visibleChange", saveRepair: "saveRepair" }, decls: 130, vars: 39, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], ["styleClass", "repair-dialog", 3, "visibleChange", "visible", "modal", "draggable", "contentStyle", "header"], [1, "repair-dialog-content"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12"], [1, "block", "font-medium", "mb-2"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "gap-2"], ["type", "button", 1, "p-3", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "bg-primary/10", "border-primary"], [1, "grid", "grid-cols-2", "sm:grid-cols-4", "gap-2"], ["pInputText", "", "placeholder", "\xDCr\xFCn ara...", 1, "w-full", "mb-2", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "p-3", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "opacity-50", "disabled"], [1, "border", "border-surface", "rounded-border", "overflow-hidden", "mt-3"], [1, "flex", "items-center", "justify-between", "p-3", "bg-surface-50", "dark:bg-surface-800"], [1, "font-medium"], [1, "text-primary"], [1, "selected-list-scroll"], [1, "selected-list", "product-selected-list"], [1, "selected-list-header"], [1, "selected-list-row", "product-row"], [1, "selected-list-empty"], ["pInputText", "", "placeholder", "\u0130\u015F\xE7ilik ara...", 1, "w-full", "mb-2", 3, "ngModelChange", "ngModel"], [1, "grid", "grid-cols-2", "sm:grid-cols-3", "lg:grid-cols-4", "gap-2"], ["type", "button", 1, "text-left", "p-3", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "bg-primary/10", "opacity-50", "disabled"], [1, "border", "border-surface", "rounded-border", "overflow-hidden"], [1, "p-3", "bg-surface-50", "dark:bg-surface-800"], [1, "grid", "grid-cols-2", "gap-2", "mt-3"], [1, "p-3", "rounded-border", "border", "border-surface", "bg-surface-0", "dark:bg-surface-900", 3, "opacity-50"], [3, "value"], [1, "flex", "justify-end", "gap-3", "p-3", "bg-surface-50", "dark:bg-surface-800"], [1, "font-semibold"], [1, "text-orange-500"], [1, "selected-list", "labor-selected-list"], [1, "text-right"], [1, "selected-list-row", "labor-row"], ["header", "Tamir \xF6zeti / adisyon fi\u015Fi", 3, "visibleChange", "visible", "modal", "draggable"], [1, "receipt-preview"], [1, "text-center", "border-b", "border-dashed", "border-surface", "pb-3"], [1, "text-lg", "font-bold"], [1, "text-sm", "text-muted-color"], [1, "py-3", "border-b", "border-dashed", "border-surface"], [1, "list-none", "p-0", "m-0", "mt-2", "flex", "flex-col", "gap-1"], [1, "flex", "justify-between", "gap-3"], [1, "text-muted-color"], [1, "flex", "justify-between", "gap-3", "pt-3", "text-lg", "font-bold"], ["type", "button", 1, "p-3", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "click"], [1, "flex", "items-center", "gap-2"], [1, "pi", "pi-user", "text-primary"], [1, "font-semibold", "text-sm"], [1, "pi", "pi-id-card", "text-primary"], ["type", "button", 1, "p-3", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "click", "disabled"], [1, "pi", "pi-plus-circle", "text-orange-500", "block", "mb-2"], [1, "selected-item-name", 3, "title"], [1, "quantity-control"], ["type", "button", "aria-label", "Adedi azalt", 1, "quantity-button", 3, "click", "disabled"], ["pInputText", "", "type", "number", "min", "1", "aria-label", "\xDCr\xFCn adedi", 1, "quantity-input", 3, "ngModelChange", "ngModel", "disabled"], ["type", "button", "aria-label", "Adedi art\u0131r", 1, "quantity-button", 3, "click", "disabled"], ["icon", "pi pi-trash", "text", "", "rounded", "", "severity", "danger", "aria-label", "\xDCr\xFCn\xFC kald\u0131r", 3, "onClick", "disabled"], ["type", "button", 1, "text-left", "p-3", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-primary/10", "text-primary", "mb-2"], [1, "pi", "pi-wrench", "text-sm"], [1, "block", "font-semibold", "text-sm"], [1, "block", "text-primary", "text-sm", "mt-1"], [1, "p-3", "rounded-border", "border", "border-surface", "bg-surface-0", "dark:bg-surface-900"], [1, "flex", "items-center", "gap-2", "mb-2"], [1, "flex", "items-center", "justify-center", "w-8", "h-8", "rounded-full", "bg-orange-100", "text-orange-600"], [1, "pi", "pi-diamond", "text-sm"], [1, "flex", "flex-col", "sm:flex-row", "gap-2"], ["pInputText", "", "type", "number", "min", "0.001", "step", "0.001", "placeholder", "Gram", 1, "metal-field", "flex-1", 3, "ngModelChange", "ngModel", "aria-label", "disabled"], ["icon", "pi pi-plus", "label", "Ekle", "size", "small", "severity", "warn", "outlined", "", 3, "onClick", "disabled"], [2, "width", "4rem"], ["icon", "pi pi-times", "text", "", "severity", "danger", 3, "onClick"], ["colspan", "3", 1, "text-center", "p-4", "text-muted-color"], ["pInputText", "", "type", "number", "min", "1", "aria-label", "\u0130\u015F\xE7ilik adedi", 1, "quantity-input", 3, "ngModelChange", "ngModel", "disabled"], ["mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "price-field", "selected-price", 3, "ngModelChange", "ngModel", "min", "disabled"], [1, "selected-total"], ["icon", "pi pi-trash", "text", "", "rounded", "", "severity", "danger", "aria-label", "\u0130\u015F\xE7ili\u011Fi kald\u0131r", 3, "onClick", "disabled"], [1, "flex", "items-center", "justify-between", "gap-2", "w-full"], ["label", "\xD6zeti yazd\u0131r", "icon", "pi pi-print", "severity", "secondary", "outlined", "", 3, "onClick", "disabled"], ["label", "Vazge\xE7", "text", "", 3, "onClick"], ["label", "Tamiri kaydet", "icon", "pi pi-check", 3, "onClick", "disabled"], ["label", "Kapat", "text", "", 3, "onClick"], ["label", "Fi\u015Fi yazd\u0131r", "icon", "pi pi-print", 3, "onClick"]], template: function RepairDialog_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-dialog", 4);
      \u0275\u0275twoWayListener("visibleChange", function RepairDialog_Template_p_dialog_visibleChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.visible, $event) || (ctx.visible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("visibleChange", function RepairDialog_Template_p_dialog_visibleChange_0_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.visibleChange.emit($event));
      });
      \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "label", 8);
      \u0275\u0275text(5, "Mevcut m\xFC\u015Fteri *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 9);
      \u0275\u0275repeaterCreate(7, RepairDialog_For_8_Template, 5, 5, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 7)(10, "label", 8);
      \u0275\u0275text(11, "\xDCr\xFCn\xFC getiren *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 11);
      \u0275\u0275repeaterCreate(13, RepairDialog_For_14_Template, 5, 5, "button", 10, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 7)(16, "label", 8);
      \u0275\u0275text(17, "\xDCr\xFCn / Tak\u0131 ekle *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function RepairDialog_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.productSearch, $event) || (ctx.productSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 11);
      \u0275\u0275repeaterCreate(20, RepairDialog_For_21_Template, 4, 4, "button", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "span", 16);
      \u0275\u0275text(25, "Se\xE7ilen \xFCr\xFCnler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "strong", 17);
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 18)(29, "div", 19)(30, "div", 20)(31, "span");
      \u0275\u0275text(32, "Se\xE7ilen \xFCr\xFCn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Adet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(36, RepairDialog_For_37_Template, 10, 8, "div", 21, _forTrack03, false, RepairDialog_ForEmpty_38_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "div", 7)(40, "label", 8);
      \u0275\u0275text(41, "\u0130\u015F\xE7ilik ekle");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 23);
      \u0275\u0275twoWayListener("ngModelChange", function RepairDialog_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.laborSearch, $event) || (ctx.laborSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 24);
      \u0275\u0275repeaterCreate(44, RepairDialog_For_45_Template, 8, 10, "button", 25, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(46, "div", 7)(47, "div", 26)(48, "div", 27)(49, "span", 16);
      \u0275\u0275text(50, "K\u0131ymetli madenler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "div", 28);
      \u0275\u0275repeaterCreate(52, RepairDialog_For_53_Template, 9, 8, "div", 29, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "p-table", 30);
      \u0275\u0275template(55, RepairDialog_ng_template_55_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(57, RepairDialog_ng_template_57_Template, 8, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(59, RepairDialog_ng_template_59_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "div", 31)(62, "span", 32);
      \u0275\u0275text(63, "Toplam");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "strong", 33);
      \u0275\u0275text(65);
      \u0275\u0275pipe(66, "number");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(67, "div", 7)(68, "div", 26)(69, "div", 15)(70, "span", 16);
      \u0275\u0275text(71, "Se\xE7ilen i\u015F\xE7ilikler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "strong", 17);
      \u0275\u0275text(73);
      \u0275\u0275pipe(74, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "div", 18)(76, "div", 34)(77, "div", 20)(78, "span");
      \u0275\u0275text(79, "Se\xE7ilen i\u015F\xE7ilik");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "span");
      \u0275\u0275text(81, "Adet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span");
      \u0275\u0275text(83, "Birim");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span", 35);
      \u0275\u0275text(85, "Toplam");
      \u0275\u0275elementEnd();
      \u0275\u0275element(86, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(87, RepairDialog_For_88_Template, 14, 15, "div", 36, _forTrack1, false, RepairDialog_ForEmpty_89_Template, 2, 0, "div", 22);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275template(90, RepairDialog_ng_template_90_Template, 5, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p-dialog", 37);
      \u0275\u0275twoWayListener("visibleChange", function RepairDialog_Template_p_dialog_visibleChange_92_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.receiptVisible, $event) || (ctx.receiptVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(93, "div", 38)(94, "div", 39)(95, "div", 40);
      \u0275\u0275text(96, "TAM\u0130R F\u0130\u015E\u0130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "div", 41);
      \u0275\u0275text(98);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 41);
      \u0275\u0275text(100);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 42)(102, "strong");
      \u0275\u0275text(103, "\xDCr\xFCnler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ul", 43);
      \u0275\u0275repeaterCreate(105, RepairDialog_For_106_Template, 5, 2, "li", 44, _forTrack03, false, RepairDialog_ForEmpty_107_Template, 2, 0, "li", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 42)(109, "strong");
      \u0275\u0275text(110, "\u0130\u015F\xE7ilikler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "ul", 43);
      \u0275\u0275repeaterCreate(112, RepairDialog_For_113_Template, 6, 6, "li", 44, _forTrack1, false, RepairDialog_ForEmpty_114_Template, 2, 0, "li", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(115, "div", 42)(116, "strong");
      \u0275\u0275text(117, "K\u0131ymetli madenler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "ul", 43);
      \u0275\u0275repeaterCreate(119, RepairDialog_For_120_Template, 6, 5, "li", 44, _forTrack1, false, RepairDialog_ForEmpty_121_Template, 2, 0, "li", 45);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(122, "div", 46)(123, "span");
      \u0275\u0275text(124, "\u0130\u015F\xE7ilik toplam\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "span");
      \u0275\u0275text(126);
      \u0275\u0275pipe(127, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(128, RepairDialog_ng_template_128_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(36, _c03));
      \u0275\u0275twoWayProperty("visible", ctx.visible);
      \u0275\u0275property("modal", true)("draggable", false)("contentStyle", \u0275\u0275pureFunction0(37, _c12))("header", ctx.editingId === null ? ctx.title : "Tamir detaylar\u0131");
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.customerOptions);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.userOptions);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.productSearch);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredProducts);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", ctx.productTotal(ctx.draft), " adet");
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.draft.products);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.laborSearch);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredLabors);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.metalTypes);
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.draft.preciousMetals);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(66, 27, ctx.metalTotal(ctx.draft), "1.3-3"), " gr");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.laborCount(ctx.draft), " adet \xB7 ", \u0275\u0275pipeBind2(74, 30, ctx.laborTotal(ctx.draft), "1.2-2"), " TL");
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.draft.labor);
      \u0275\u0275advance(5);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(38, _c2));
      \u0275\u0275twoWayProperty("visible", ctx.receiptVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.draft.customer || "M\xFC\u015Fteri se\xE7ilmedi");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Getiren: ", ctx.draft.broughtBy || "-");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.draft.products);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.draft.labor);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.draft.preciousMetals);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(127, 33, ctx.laborTotal(ctx.draft), "1.2-2"), " TL");
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, ButtonModule, Button, DialogModule, Dialog, InputNumberModule, InputNumber, InputTextModule, InputText, TableModule, Table, DecimalPipe], styles: ["\n\n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-field[_ngcontent-%COMP%] {\n  width: 6rem;\n  min-width: 6rem;\n}\n.repair-dialog-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .price-field[_ngcontent-%COMP%] {\n  width: 8rem;\n  min-width: 8rem;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-border);\n  border-radius: 0.6rem;\n  overflow: hidden;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list-scroll[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-x: auto;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%], \n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list-row[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 0.75rem;\n  box-sizing: border-box;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%], \n.repair-dialog-content[_ngcontent-%COMP%]   .product-selected-list[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) 6.5rem 2.25rem;\n  min-width: 24rem;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .labor-row[_ngcontent-%COMP%], \n.repair-dialog-content[_ngcontent-%COMP%]   .labor-selected-list[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(12rem, 1fr) 7rem 9rem 9rem 2.25rem;\n  min-width: 41.25rem;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .labor-selected-list[_ngcontent-%COMP%] {\n  min-width: 41.25rem;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list-row[_ngcontent-%COMP%] {\n  min-height: 3.25rem;\n  border-top: 1px solid var(--surface-border);\n  background: var(--surface-0);\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-item-name[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list[_ngcontent-%COMP%]   .quantity-field[_ngcontent-%COMP%], \n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list[_ngcontent-%COMP%]   .price-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-price[_ngcontent-%COMP%] {\n  width: 9rem;\n  min-width: 9rem;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-control[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.75rem minmax(2rem, 1fr) 1.75rem;\n  align-items: center;\n  width: 6.5rem;\n  overflow: hidden;\n  border: 1px solid var(--surface-border);\n  border-radius: 0.45rem;\n  background: var(--surface-0);\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%] {\n  height: 2rem;\n  border: 0;\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  background: var(--primary-50);\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  height: 2rem;\n  padding: 0 0.15rem;\n  border: 0;\n  border-right: 1px solid var(--surface-border);\n  border-left: 1px solid var(--surface-border);\n  border-radius: 0;\n  text-align: center;\n  box-shadow: none;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.repair-dialog-content[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  margin: 0;\n  appearance: none;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-total[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .selected-list-empty[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  text-align: center;\n}\n.repair-dialog-content[_ngcontent-%COMP%]   .metal-field[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n/*# sourceMappingURL=repair-dialog.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepairDialog, [{
    type: Component,
    args: [{ selector: "app-repair-dialog", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule], template: `<p-dialog [(visible)]="visible" (visibleChange)="visibleChange.emit($event)" [modal]="true" [draggable]="false" [style]="{ width: 'min(72rem, 96vw)' }" [contentStyle]="{ 'max-height': '78vh', overflow: 'auto' }" [header]="editingId === null ? title : 'Tamir detaylar\u0131'" styleClass="repair-dialog">
    <div class="repair-dialog-content">
        <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12">
            <label class="block font-medium mb-2">Mevcut m\xFC\u015Fteri *</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
                @for (customer of customerOptions; track customer) {
                <button
                    type="button"
                    class="p-3 text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors"
                    [class.bg-primary/10]="draft.customer === customer"
                    [class.border-primary]="draft.customer === customer"
                    (click)="draft.customer = customer"
                >
                    <span class="flex items-center gap-2"><i class="pi pi-user text-primary"></i><span class="font-semibold text-sm">{{ customer }}</span></span>
                </button>
                }
                </div>
            </div>
        <div class="col-span-12">
            <label class="block font-medium mb-2">\xDCr\xFCn\xFC getiren *</label>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                @for (user of userOptions; track user) {
                <button
                    type="button"
                    class="p-3 text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors"
                    [class.bg-primary/10]="draft.broughtBy === user"
                    [class.border-primary]="draft.broughtBy === user"
                    (click)="draft.broughtBy = user"
                >
                    <span class="flex items-center gap-2"><i class="pi pi-id-card text-primary"></i><span class="font-semibold text-sm">{{ user }}</span></span>
                </button>
                }
            </div>
        </div>
        <div class="col-span-12">
            <label class="block font-medium mb-2">\xDCr\xFCn / Tak\u0131 ekle *</label>
            <input pInputText class="w-full mb-2" placeholder="\xDCr\xFCn ara..." [(ngModel)]="productSearch" />
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                @for (product of filteredProducts; track product) {
                <button
                    type="button"
                    class="p-3 text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors"
                    [class.opacity-50]="draft.status === 'Tamamland\u0131'"
                    [disabled]="draft.status === 'Tamamland\u0131'"
                    (click)="addProduct(product)"
                >
                    <i class="pi pi-plus-circle text-orange-500 block mb-2"></i><span class="font-semibold text-sm">{{ product }}</span>
                </button>
                }
            </div>
            <div class="border border-surface rounded-border overflow-hidden mt-3">
                <div class="flex items-center justify-between p-3 bg-surface-50 dark:bg-surface-800">
                    <span class="font-medium">Se\xE7ilen \xFCr\xFCnler</span>
                    <strong class="text-primary">{{ productTotal(draft) }} adet</strong>
                </div>
                <div class="selected-list-scroll">
                    <div class="selected-list product-selected-list">
                        <div class="selected-list-header"><span>Se\xE7ilen \xFCr\xFCn</span><span>Adet</span><span></span></div>
                        @for (product of draft.products; track product.name) {
                        <div class="selected-list-row product-row">
                            <span class="selected-item-name" title="{{ product.name }}">{{ product.name }}</span>
                            <div class="quantity-control">
                                <button type="button" class="quantity-button" aria-label="Adedi azalt" (click)="changeProductQuantity(product, -1)" [disabled]="draft.status === 'Tamamland\u0131'">\u2212</button>
                                <input pInputText class="quantity-input" type="number" min="1" [(ngModel)]="product.quantity" aria-label="\xDCr\xFCn adedi" [disabled]="draft.status === 'Tamamland\u0131'" />
                                <button type="button" class="quantity-button" aria-label="Adedi art\u0131r" (click)="changeProductQuantity(product, 1)" [disabled]="draft.status === 'Tamamland\u0131'">+</button>
                            </div>
                            <p-button icon="pi pi-trash" text rounded severity="danger" aria-label="\xDCr\xFCn\xFC kald\u0131r" (onClick)="removeProduct(product)" [disabled]="draft.status === 'Tamamland\u0131'" />
                        </div>
                        } @empty {
                        <div class="selected-list-empty">Hen\xFCz \xFCr\xFCn eklenmedi.</div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <label class="block font-medium mb-2">\u0130\u015F\xE7ilik ekle</label>
            <input pInputText class="w-full mb-2" placeholder="\u0130\u015F\xE7ilik ara..." [(ngModel)]="laborSearch" />
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                @for (labor of filteredLabors; track labor.id) {
                <button
                    type="button"
                    class="text-left p-3 rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors"
                    [class.bg-primary/10]="hasLabor(labor)"
                    [class.opacity-50]="draft.status === 'Tamamland\u0131'"
                    [disabled]="draft.status === 'Tamamland\u0131'"
                    (click)="addLabor(labor)"
                >
                    <span class="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary mb-2"><i class="pi pi-wrench text-sm"></i></span><span class="block font-semibold text-sm">{{ labor.name }}</span
                    ><span class="block text-primary text-sm mt-1">{{ labor.price | number: '1.2-2' }} TL</span>
                </button>
                }
            </div>
        </div>
        <div class="col-span-12">
            <div class="border border-surface rounded-border overflow-hidden">
                <div class="p-3 bg-surface-50 dark:bg-surface-800">
                    <span class="font-medium">K\u0131ymetli madenler</span>
                    <div class="grid grid-cols-2 gap-2 mt-3">
                @for (metalType of metalTypes; track metalType) {
                <div class="p-3 rounded-border border border-surface bg-surface-0 dark:bg-surface-900" [class.opacity-50]="draft.status === 'Tamamland\u0131'">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-600"><i class="pi pi-diamond text-sm"></i></span><span class="font-semibold text-sm">{{ metalType }}</span>
                    </div>
                    <div class="flex flex-col sm:flex-row gap-2">
                        <input pInputText class="metal-field flex-1" type="number" min="0.001" step="0.001" [(ngModel)]="metalDraft.gramsByType[metalType]" placeholder="Gram" aria-label="{{ metalType }} gram" [disabled]="draft.status === 'Tamamland\u0131'" /><p-button
                            icon="pi pi-plus"
                            label="Ekle"
                            size="small"
                            severity="warn"
                            outlined
                            (onClick)="addMetal(metalType)"
                            [disabled]="draft.status === 'Tamamland\u0131'"
                        />
                    </div>
                </div>
                }
                    </div>
                </div>
                <p-table [value]="draft.preciousMetals"
                    ><ng-template #header
                        ><tr>
                            <th>K\u0131ymetli maden</th>
                            <th class="text-right">Gram</th>
                            <th style="width: 4rem"></th></tr></ng-template
                    ><ng-template #body let-metal
                        ><tr>
                            <td>{{ metal.type }}</td>
                            <td class="text-right">{{ metal.grams | number: '1.3-3' }} gr</td>
                            <td><p-button icon="pi pi-times" text severity="danger" (onClick)="removeMetal(metal)" /></td></tr></ng-template
                    ><ng-template #emptymessage
                        ><tr>
                            <td colspan="3" class="text-center p-4 text-muted-color">Bu tamir i\xE7in k\u0131ymetli maden eklenmedi.</td>
                        </tr></ng-template
                    ></p-table
                >
                <div class="flex justify-end gap-3 p-3 bg-surface-50 dark:bg-surface-800"><span class="font-semibold">Toplam</span><strong class="text-orange-500">{{ metalTotal(draft) | number: '1.3-3' }} gr</strong></div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="border border-surface rounded-border overflow-hidden">
                <div class="flex items-center justify-between p-3 bg-surface-50 dark:bg-surface-800"><span class="font-medium">Se\xE7ilen i\u015F\xE7ilikler</span><strong class="text-primary">{{ laborCount(draft) }} adet \xB7 {{ laborTotal(draft) | number: '1.2-2' }} TL</strong></div>
                <div class="selected-list-scroll">
                    <div class="selected-list labor-selected-list">
                        <div class="selected-list-header"><span>Se\xE7ilen i\u015F\xE7ilik</span><span>Adet</span><span>Birim</span><span class="text-right">Toplam</span><span></span></div>
                        @for (item of draft.labor; track item.id) {
                        <div class="selected-list-row labor-row">
                            <span class="selected-item-name" title="{{ item.name }}">{{ item.name }}</span>
                            <div class="quantity-control">
                                <button type="button" class="quantity-button" aria-label="Adedi azalt" (click)="changeLaborQuantity(item, -1)" [disabled]="draft.status === 'Tamamland\u0131'">\u2212</button>
                                <input pInputText class="quantity-input" type="number" min="1" [(ngModel)]="item.quantity" aria-label="\u0130\u015F\xE7ilik adedi" [disabled]="draft.status === 'Tamamland\u0131'" />
                                <button type="button" class="quantity-button" aria-label="Adedi art\u0131r" (click)="changeLaborQuantity(item, 1)" [disabled]="draft.status === 'Tamamland\u0131'">+</button>
                            </div>
                            <p-inputnumber class="price-field selected-price" [(ngModel)]="item.price" mode="currency" currency="TRY" locale="tr-TR" [min]="0" [disabled]="draft.status === 'Tamamland\u0131'" />
                            <strong class="selected-total">{{ item.price * (item.quantity || 1) | number: '1.2-2' }} TL</strong>
                            <p-button icon="pi pi-trash" text rounded severity="danger" aria-label="\u0130\u015F\xE7ili\u011Fi kald\u0131r" (onClick)="removeLabor(item)" [disabled]="draft.status === 'Tamamland\u0131'" />
                        </div>
                        } @empty {
                        <div class="selected-list-empty">Hen\xFCz i\u015F\xE7ilik se\xE7ilmedi.</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <ng-template #footer>
        <div class="flex items-center justify-between gap-2 w-full">
            <p-button label="\xD6zeti yazd\u0131r" icon="pi pi-print" severity="secondary" outlined (onClick)="openReceipt()" [disabled]="!canPrintReceipt" />
            <div class="flex items-center gap-2">
                <p-button label="Vazge\xE7" text (onClick)="close()" />
                <p-button label="Tamiri kaydet" icon="pi pi-check" (onClick)="save()" [disabled]="editingId !== null" />
            </div>
        </div>
    </ng-template>
</p-dialog>

<p-dialog [(visible)]="receiptVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(28rem, 94vw)' }" header="Tamir \xF6zeti / adisyon fi\u015Fi">
    <div class="receipt-preview">
        <div class="text-center border-b border-dashed border-surface pb-3">
            <div class="text-lg font-bold">TAM\u0130R F\u0130\u015E\u0130</div>
            <div class="text-sm text-muted-color">{{ draft.customer || 'M\xFC\u015Fteri se\xE7ilmedi' }}</div>
            <div class="text-sm text-muted-color">Getiren: {{ draft.broughtBy || '-' }}</div>
        </div>
        <div class="py-3 border-b border-dashed border-surface">
            <strong>\xDCr\xFCnler</strong>
            <ul class="list-none p-0 m-0 mt-2 flex flex-col gap-1">
                @for (product of draft.products; track product.name) {
                <li class="flex justify-between gap-3"><span>{{ product.name }}</span><strong>x{{ product.quantity }}</strong></li>
                } @empty { <li class="text-muted-color">-</li> }
            </ul>
        </div>
        <div class="py-3 border-b border-dashed border-surface">
            <strong>\u0130\u015F\xE7ilikler</strong>
            <ul class="list-none p-0 m-0 mt-2 flex flex-col gap-1">
                @for (labor of draft.labor; track labor.id) {
                <li class="flex justify-between gap-3"><span>{{ labor.name }} x{{ labor.quantity || 1 }}</span><strong>{{ labor.price * (labor.quantity || 1) | number: '1.2-2' }} TL</strong></li>
                } @empty { <li class="text-muted-color">-</li> }
            </ul>
        </div>
        <div class="py-3 border-b border-dashed border-surface">
            <strong>K\u0131ymetli madenler</strong>
            <ul class="list-none p-0 m-0 mt-2 flex flex-col gap-1">
                @for (metal of draft.preciousMetals; track metal.id) {
                <li class="flex justify-between gap-3"><span>{{ metal.type }}</span><strong>{{ metal.grams | number: '1.3-3' }} gr</strong></li>
                } @empty { <li class="text-muted-color">-</li> }
            </ul>
        </div>
        <div class="flex justify-between gap-3 pt-3 text-lg font-bold"><span>\u0130\u015F\xE7ilik toplam\u0131</span><span>{{ laborTotal(draft) | number: '1.2-2' }} TL</span></div>
    </div>
    <ng-template #footer>
        <p-button label="Kapat" text (onClick)="receiptVisible = false" />
        <p-button label="Fi\u015Fi yazd\u0131r" icon="pi pi-print" (onClick)="printReceipt()" />
    </ng-template>
</p-dialog>
`, styles: ["/* angular:styles/component:scss;781c18a63767502cefbdb81e9e5aba09aa012415643463d86e4ba4199ca5fca7;C:/Git/YurekliGoldFE/src/app/pages/jewelry/repair-dialog.ts */\n.repair-dialog-content .quantity-field {\n  width: 6rem;\n  min-width: 6rem;\n}\n.repair-dialog-content {\n  min-width: 0;\n}\n.repair-dialog-content .grid > * {\n  min-width: 0;\n}\n.repair-dialog-content .price-field {\n  width: 8rem;\n  min-width: 8rem;\n}\n.repair-dialog-content .selected-list {\n  border: 1px solid var(--surface-border);\n  border-radius: 0.6rem;\n  overflow: hidden;\n}\n.repair-dialog-content .selected-list-scroll {\n  min-width: 0;\n  overflow-x: auto;\n}\n.repair-dialog-content .selected-list-header,\n.repair-dialog-content .selected-list-row {\n  display: grid;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 0.75rem;\n  box-sizing: border-box;\n}\n.repair-dialog-content .selected-list-header {\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.repair-dialog-content .product-row,\n.repair-dialog-content .product-selected-list .selected-list-header {\n  grid-template-columns: minmax(0, 1fr) 6.5rem 2.25rem;\n  min-width: 24rem;\n}\n.repair-dialog-content .labor-row,\n.repair-dialog-content .labor-selected-list .selected-list-header {\n  grid-template-columns: minmax(12rem, 1fr) 7rem 9rem 9rem 2.25rem;\n  min-width: 41.25rem;\n}\n.repair-dialog-content .labor-selected-list {\n  min-width: 41.25rem;\n}\n.repair-dialog-content .selected-list-row {\n  min-height: 3.25rem;\n  border-top: 1px solid var(--surface-border);\n  background: var(--surface-0);\n}\n.repair-dialog-content .selected-item-name {\n  min-width: 0;\n  overflow: hidden;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.repair-dialog-content .selected-list .quantity-field,\n.repair-dialog-content .selected-list .price-field {\n  width: 100%;\n  min-width: 0;\n}\n.repair-dialog-content .selected-price {\n  width: 9rem;\n  min-width: 9rem;\n}\n.repair-dialog-content .quantity-control {\n  display: grid;\n  grid-template-columns: 1.75rem minmax(2rem, 1fr) 1.75rem;\n  align-items: center;\n  width: 6.5rem;\n  overflow: hidden;\n  border: 1px solid var(--surface-border);\n  border-radius: 0.45rem;\n  background: var(--surface-0);\n}\n.repair-dialog-content .quantity-button {\n  height: 2rem;\n  border: 0;\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.repair-dialog-content .quantity-button:hover {\n  color: var(--primary-color);\n  background: var(--primary-50);\n}\n.repair-dialog-content .quantity-input {\n  width: 100%;\n  min-width: 0;\n  height: 2rem;\n  padding: 0 0.15rem;\n  border: 0;\n  border-right: 1px solid var(--surface-border);\n  border-left: 1px solid var(--surface-border);\n  border-radius: 0;\n  text-align: center;\n  box-shadow: none;\n}\n.repair-dialog-content .quantity-input::-webkit-inner-spin-button,\n.repair-dialog-content .quantity-input::-webkit-outer-spin-button {\n  margin: 0;\n  appearance: none;\n}\n.repair-dialog-content .selected-total {\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.repair-dialog-content .selected-list-empty {\n  padding: 1rem;\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  text-align: center;\n}\n.repair-dialog-content .metal-field {\n  min-width: 0;\n}\n/*# sourceMappingURL=repair-dialog.css.map */\n"] }]
  }], () => [{ type: RepairStateService }], { visible: [{
    type: Input
  }], visibleChange: [{
    type: Output
  }], editingId: [{
    type: Input
  }], draft: [{
    type: Input
  }], saveRepair: [{
    type: Output
  }], title: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepairDialog, { className: "RepairDialog", filePath: "src/app/pages/jewelry/repair-dialog.ts", lineNumber: 171 });
})();

// src/app/pages/dashboard/dashboard.ts
var _forTrack04 = ($index, $item) => $item.id;
function Dashboard_For_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 50);
    \u0275\u0275element(2, "i", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 52)(4, "div", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 54);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 54);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const repair_r1 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", repair_r1.customer, " \xB7 ", repair_r1.products.join(", "));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", repair_r1.labor.length ? repair_r1.labor[0].name : "\u0130\u015F\xE7ilik eklenmedi", " \xB7 ", repair_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(repair_r1.createdAt);
  }
}
function Dashboard_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275text(1, "Hen\xFCz tamir kayd\u0131 bulunmuyor.");
    \u0275\u0275elementEnd();
  }
}
var Dashboard = class _Dashboard {
  repairState;
  repairDialogVisible = false;
  quickRepair = this.emptyRepair();
  constructor(repairState) {
    this.repairState = repairState;
  }
  get repairs() {
    return this.repairState.records();
  }
  get pendingRepairs() {
    return this.repairs.filter((repair) => repair.status === "Ba\u015Flad\u0131");
  }
  get recentRepairs() {
    return this.repairs.slice(0, 5);
  }
  startQuickRepair(draft) {
    if (!draft.customer || !draft.broughtBy || !draft.products.length) {
      return;
    }
    const timestamp = Date.now();
    this.repairState.add(__spreadProps(__spreadValues({}, draft), {
      id: timestamp,
      status: "Ba\u015Flad\u0131",
      createdAt: "20.09.2026 " + (/* @__PURE__ */ new Date()).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
    }));
    this.repairDialogVisible = false;
    this.quickRepair = this.emptyRepair();
  }
  emptyRepair() {
    return { id: 0, customer: "", broughtBy: "", products: [], description: "", labor: [], preciousMetals: [], status: "Ba\u015Flad\u0131", createdAt: "" };
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(RepairStateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], decls: 120, vars: 4, consts: [[1, "flex", "flex-col", "gap-6"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "md:justify-between", "gap-4"], [1, "text-muted-color"], [1, "text-3xl", "font-semibold", "mt-2", "mb-0"], [1, "text-muted-color", "mt-2", "mb-0"], [1, "grid", "grid-cols-12", "gap-6"], [1, "col-span-12", "sm:col-span-6", "xl:col-span-3"], [1, "card"], [1, "text-3xl", "font-semibold", "mt-3"], [1, "text-green-500", "text-sm"], [1, "pi", "pi-arrow-up"], [1, "text-primary", "text-sm"], [1, "text-orange-500", "text-sm"], [1, "text-red-500", "text-sm"], [1, "col-span-12"], ["type", "button", 1, "card", "w-full", "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4", "border-2", "border-primary/30", "hover:border-primary", "transition-colors", "cursor-pointer", "text-left", 3, "click"], [1, "flex", "items-center", "gap-4"], [1, "flex", "items-center", "justify-center", "w-14", "h-14", "rounded-full", "bg-primary", "text-primary-contrast"], [1, "pi", "pi-wrench", "text-2xl"], [1, "text-xl", "font-semibold", "m-0"], [1, "text-muted-color", "mt-1", "mb-0"], [1, "text-primary", "font-semibold"], [1, "pi", "pi-arrow-right", "ml-2"], [1, "col-span-12", "xl:col-span-8"], [1, "flex", "justify-between", "items-center", "mb-5"], ["routerLink", "/repairs", 1, "text-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-2", "gap-4", "mb-6"], ["routerLink", "/repairs", 1, "p-4", "rounded-border", "border", "border-orange-200", "dark:border-orange-400/30", "bg-orange-50", "dark:bg-orange-400/10", "hover:border-orange-400", "transition-colors"], [1, "flex", "items-center", "justify-between"], [1, "pi", "pi-wrench", "text-orange-500"], [1, "text-orange-600", "text-sm"], ["routerLink", "/customers", 1, "p-4", "rounded-border", "border", "border-red-200", "dark:border-red-400/30", "bg-red-50", "dark:bg-red-400/10", "hover:border-red-400", "transition-colors"], [1, "pi", "pi-wallet", "text-red-500"], [1, "text-red-600", "text-sm"], [1, "flex", "flex-col", "gap-4"], [1, "flex", "items-center", "gap-3"], [1, "text-muted-color", "text-center", "py-4"], [1, "col-span-12", "xl:col-span-4"], [1, "text-xl", "font-semibold", "mt-0"], [1, "flex", "flex-col", "gap-3"], ["type", "button", 1, "flex", "items-center", "gap-3", "p-3", "rounded-border", "bg-primary/5", "hover:bg-primary/10", "transition-colors", "text-left", 3, "click"], [1, "pi", "pi-wrench", "text-primary"], [1, "block"], [1, "pi", "pi-angle-right", "ml-auto", "text-muted-color"], ["routerLink", "/customers", 1, "flex", "items-center", "gap-3", "p-3", "rounded-border", "hover:bg-emphasis", "transition-colors"], [1, "pi", "pi-wallet", "text-orange-500"], [1, "pi", "pi-plus-circle", "text-primary"], ["routerLink", "/users", 1, "flex", "items-center", "gap-3", "p-3", "rounded-border", "hover:bg-emphasis", "transition-colors"], [1, "pi", "pi-user-plus", "text-primary"], ["title", "Tamir ba\u015Flat", 3, "visibleChange", "saveRepair", "visible", "draft"], [1, "flex", "items-center", "justify-center", "rounded-full", "bg-orange-100", "text-orange-600", "w-10", "h-10"], [1, "pi", "pi-wrench"], [1, "flex-1"], [1, "font-medium"], [1, "text-muted-color", "text-sm"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Genel bak\u0131\u015F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 3);
      \u0275\u0275text(6, "CRM Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Ho\u015F geldin, Demo Kullan\u0131c\u0131. \u0130\u015Flerini bug\xFCn de kolayca takip et.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "span", 2);
      \u0275\u0275text(10, "20 Eyl\xFCl 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "span", 2);
      \u0275\u0275text(15, "Toplam m\xFC\u015Fteri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 8);
      \u0275\u0275text(17, "128");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 9);
      \u0275\u0275element(19, "i", 10);
      \u0275\u0275text(20, " %12,5 bu ay");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "div", 6)(22, "div", 7)(23, "span", 2);
      \u0275\u0275text(24, "Aktif kullan\u0131c\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8);
      \u0275\u0275text(26, "24");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span", 11);
      \u0275\u0275text(28, "4 yeni kullan\u0131c\u0131");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 6)(30, "div", 7)(31, "span", 2);
      \u0275\u0275text(32, "A\xE7\u0131k f\u0131rsatlar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 8);
      \u0275\u0275text(34, "36");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 12);
      \u0275\u0275text(36, "\u20BA 482.500 de\u011Ferinde");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(37, "div", 6)(38, "div", 7)(39, "span", 2);
      \u0275\u0275text(40, "Bekleyen g\xF6revler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div", 8);
      \u0275\u0275text(42, "18");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span", 13);
      \u0275\u0275text(44, "5 tanesi bug\xFCn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(45, "div", 14)(46, "button", 15);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_46_listener() {
        return ctx.repairDialogVisible = true;
      });
      \u0275\u0275elementStart(47, "div", 16)(48, "span", 17);
      \u0275\u0275element(49, "i", 18);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "div")(51, "h2", 19);
      \u0275\u0275text(52, "Tamir ba\u015Flat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 20);
      \u0275\u0275text(54, "M\xFC\u015Fteri \xFCr\xFCn\xFCn\xFC teslim al\u0131n, i\u015F\xE7ilik ekleyin ve tamir s\xFCrecini ba\u015Flat\u0131n.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(55, "span", 21);
      \u0275\u0275text(56, "H\u0131zl\u0131 ba\u015Flat ");
      \u0275\u0275element(57, "i", 22);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(58, "div", 23)(59, "div", 7)(60, "div", 24)(61, "h2", 19);
      \u0275\u0275text(62, "Tamir ve m\xFC\u015Fteri raporu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "a", 25);
      \u0275\u0275text(64, "Tamirleri g\xF6r");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 26)(66, "a", 27)(67, "div", 28)(68, "span", 2);
      \u0275\u0275text(69, "Bekleyen tamir");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "i", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "div", 8);
      \u0275\u0275text(72);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span", 30);
      \u0275\u0275text(74, "Tamamlanmay\u0131 bekleyen i\u015Flem");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(75, "a", 31)(76, "div", 28)(77, "span", 2);
      \u0275\u0275text(78, "Toplam alacak");
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "i", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 8);
      \u0275\u0275text(81, "\u20BA 18.420");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "span", 33);
      \u0275\u0275text(83, "Tahsilat bekleyen tutar");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(84, "div", 34);
      \u0275\u0275repeaterCreate(85, Dashboard_For_86_Template, 10, 5, "div", 35, _forTrack04);
      \u0275\u0275conditionalCreate(87, Dashboard_Conditional_87_Template, 2, 0, "div", 36);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(88, "div", 37)(89, "div", 7)(90, "h2", 38);
      \u0275\u0275text(91, "H\u0131zl\u0131 i\u015Flemler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 39)(93, "button", 40);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_93_listener() {
        return ctx.repairDialogVisible = true;
      });
      \u0275\u0275element(94, "i", 41);
      \u0275\u0275elementStart(95, "span")(96, "strong", 42);
      \u0275\u0275text(97, "H\u0131zl\u0131 tamir ba\u015Flat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "small", 2);
      \u0275\u0275text(99, "M\xFC\u015Fteri ve \xFCr\xFCn se\xE7erek");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(100, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "a", 44);
      \u0275\u0275element(102, "i", 45);
      \u0275\u0275elementStart(103, "span")(104, "strong", 42);
      \u0275\u0275text(105, "Tahsilatlar\u0131 takip et");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "small", 2);
      \u0275\u0275text(107, "M\xFC\u015Fteri alacaklar\u0131n\u0131 g\xF6r\xFCnt\xFCle");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(108, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "a", 44);
      \u0275\u0275element(110, "i", 46);
      \u0275\u0275elementStart(111, "span");
      \u0275\u0275text(112, "Yeni m\xFC\u015Fteri ekle");
      \u0275\u0275elementEnd();
      \u0275\u0275element(113, "i", 43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "a", 47);
      \u0275\u0275element(115, "i", 48);
      \u0275\u0275elementStart(116, "span");
      \u0275\u0275text(117, "Kullan\u0131c\u0131lar\u0131 y\xF6net");
      \u0275\u0275elementEnd();
      \u0275\u0275element(118, "i", 43);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(119, "app-repair-dialog", 49);
      \u0275\u0275twoWayListener("visibleChange", function Dashboard_Template_app_repair_dialog_visibleChange_119_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.repairDialogVisible, $event) || (ctx.repairDialogVisible = $event);
        return $event;
      });
      \u0275\u0275listener("saveRepair", function Dashboard_Template_app_repair_dialog_saveRepair_119_listener($event) {
        return ctx.startQuickRepair($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(72);
      \u0275\u0275textInterpolate(ctx.pendingRepairs.length);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.recentRepairs);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.recentRepairs.length ? 87 : -1);
      \u0275\u0275advance(32);
      \u0275\u0275twoWayProperty("visible", ctx.repairDialogVisible);
      \u0275\u0275property("draft", ctx.quickRepair);
    }
  }, dependencies: [CommonModule, FormsModule, RouterModule, RouterLink, ButtonModule, RepairDialog], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "app-dashboard", imports: [CommonModule, FormsModule, RouterModule, ButtonModule, RepairDialog], template: `<div class="flex flex-col gap-6">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
            <span class="text-muted-color">Genel bak\u0131\u015F</span>
            <h1 class="text-3xl font-semibold mt-2 mb-0">CRM Dashboard</h1>
            <p class="text-muted-color mt-2 mb-0">Ho\u015F geldin, Demo Kullan\u0131c\u0131. \u0130\u015Flerini bug\xFCn de kolayca takip et.</p>
        </div>
        <span class="text-muted-color">20 Eyl\xFCl 2026</span>
    </div>
    <div class="grid grid-cols-12 gap-6">
        <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="card">
                <span class="text-muted-color">Toplam m\xFC\u015Fteri</span>
                <div class="text-3xl font-semibold mt-3">128</div>
                <span class="text-green-500 text-sm"><i class="pi pi-arrow-up"></i> %12,5 bu ay</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="card">
                <span class="text-muted-color">Aktif kullan\u0131c\u0131</span>
                <div class="text-3xl font-semibold mt-3">24</div>
                <span class="text-primary text-sm">4 yeni kullan\u0131c\u0131</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="card">
                <span class="text-muted-color">A\xE7\u0131k f\u0131rsatlar</span>
                <div class="text-3xl font-semibold mt-3">36</div>
                <span class="text-orange-500 text-sm">\u20BA 482.500 de\u011Ferinde</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-6 xl:col-span-3">
            <div class="card">
                <span class="text-muted-color">Bekleyen g\xF6revler</span>
                <div class="text-3xl font-semibold mt-3">18</div>
                <span class="text-red-500 text-sm">5 tanesi bug\xFCn</span>
            </div>
        </div>
        <div class="col-span-12">
            <button type="button" class="card w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-2 border-primary/30 hover:border-primary transition-colors cursor-pointer text-left" (click)="repairDialogVisible = true">
                <div class="flex items-center gap-4">
                    <span class="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-contrast"><i class="pi pi-wrench text-2xl"></i></span>
                    <div>
                        <h2 class="text-xl font-semibold m-0">Tamir ba\u015Flat</h2>
                        <p class="text-muted-color mt-1 mb-0">M\xFC\u015Fteri \xFCr\xFCn\xFCn\xFC teslim al\u0131n, i\u015F\xE7ilik ekleyin ve tamir s\xFCrecini ba\u015Flat\u0131n.</p>
                    </div>
                </div>
                <span class="text-primary font-semibold">H\u0131zl\u0131 ba\u015Flat <i class="pi pi-arrow-right ml-2"></i></span>
            </button>
        </div>
        <div class="col-span-12 xl:col-span-8">
            <div class="card">
                <div class="flex justify-between items-center mb-5">
                    <h2 class="text-xl font-semibold m-0">Tamir ve m\xFC\u015Fteri raporu</h2>
                    <a routerLink="/repairs" class="text-primary">Tamirleri g\xF6r</a>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <a routerLink="/repairs" class="p-4 rounded-border border border-orange-200 dark:border-orange-400/30 bg-orange-50 dark:bg-orange-400/10 hover:border-orange-400 transition-colors"
                        ><div class="flex items-center justify-between"><span class="text-muted-color">Bekleyen tamir</span><i class="pi pi-wrench text-orange-500"></i></div>
                        <div class="text-3xl font-semibold mt-3">{{ pendingRepairs.length }}</div>
                        <span class="text-orange-600 text-sm">Tamamlanmay\u0131 bekleyen i\u015Flem</span></a
                    ><a routerLink="/customers" class="p-4 rounded-border border border-red-200 dark:border-red-400/30 bg-red-50 dark:bg-red-400/10 hover:border-red-400 transition-colors"
                        ><div class="flex items-center justify-between"><span class="text-muted-color">Toplam alacak</span><i class="pi pi-wallet text-red-500"></i></div>
                        <div class="text-3xl font-semibold mt-3">\u20BA 18.420</div>
                        <span class="text-red-600 text-sm">Tahsilat bekleyen tutar</span></a
                    >
                </div>
                <div class="flex flex-col gap-4">
                    @for (repair of recentRepairs; track repair.id) {
                    <div class="flex items-center gap-3">
                        <span class="flex items-center justify-center rounded-full bg-orange-100 text-orange-600 w-10 h-10"><i class="pi pi-wrench"></i></span>
                        <div class="flex-1">
                            <div class="font-medium">{{ repair.customer }} \xB7 {{ repair.products.join(', ') }}</div>
                            <span class="text-muted-color text-sm">{{ repair.labor.length ? repair.labor[0].name : '\u0130\u015F\xE7ilik eklenmedi' }} \xB7 {{ repair.status }}</span>
                        </div>
                        <span class="text-muted-color text-sm">{{ repair.createdAt }}</span>
                    </div>
                    } @if (!recentRepairs.length) {
                    <div class="text-muted-color text-center py-4">Hen\xFCz tamir kayd\u0131 bulunmuyor.</div>
                    }
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4">
            <div class="card">
                <h2 class="text-xl font-semibold mt-0">H\u0131zl\u0131 i\u015Flemler</h2>
                <div class="flex flex-col gap-3">
                    <button type="button" class="flex items-center gap-3 p-3 rounded-border bg-primary/5 hover:bg-primary/10 transition-colors text-left" (click)="repairDialogVisible = true">
                        <i class="pi pi-wrench text-primary"></i><span><strong class="block">H\u0131zl\u0131 tamir ba\u015Flat</strong><small class="text-muted-color">M\xFC\u015Fteri ve \xFCr\xFCn se\xE7erek</small></span
                        ><i class="pi pi-angle-right ml-auto text-muted-color"></i></button
                    ><a routerLink="/customers" class="flex items-center gap-3 p-3 rounded-border hover:bg-emphasis transition-colors"
                        ><i class="pi pi-wallet text-orange-500"></i><span><strong class="block">Tahsilatlar\u0131 takip et</strong><small class="text-muted-color">M\xFC\u015Fteri alacaklar\u0131n\u0131 g\xF6r\xFCnt\xFCle</small></span
                        ><i class="pi pi-angle-right ml-auto text-muted-color"></i></a
                    ><a routerLink="/customers" class="flex items-center gap-3 p-3 rounded-border hover:bg-emphasis transition-colors"
                        ><i class="pi pi-plus-circle text-primary"></i><span>Yeni m\xFC\u015Fteri ekle</span><i class="pi pi-angle-right ml-auto text-muted-color"></i></a
                    ><a routerLink="/users" class="flex items-center gap-3 p-3 rounded-border hover:bg-emphasis transition-colors"
                        ><i class="pi pi-user-plus text-primary"></i><span>Kullan\u0131c\u0131lar\u0131 y\xF6net</span><i class="pi pi-angle-right ml-auto text-muted-color"></i
                    ></a>
                </div>
            </div>
        </div>
    </div>
</div>

<app-repair-dialog [(visible)]="repairDialogVisible" [draft]="quickRepair" title="Tamir ba\u015Flat" (saveRepair)="startQuickRepair($event)" />
` }]
  }], () => [{ type: RepairStateService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 14 });
})();

// src/app/pages/landing/components/topbarwidget.component.ts
var TopbarWidget = class _TopbarWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function TopbarWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TopbarWidget)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarWidget, selectors: [["topbar-widget"]], decls: 33, vars: 7, consts: [["href", "#", 1, "flex", "items-center"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-12", "mr-2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "text-surface-900", "dark:text-surface-0", "font-medium", "text-2xl", "leading-normal", "mr-20"], ["pButton", "", "severity", "secondary", "pRipple", "", "pStyleClass", "@next", "enterFromClass", "hidden", "leaveToClass", "hidden", 1, "lg:hidden!", 3, "text", "rounded", "hideOnOutsideClick"], [1, "pi", "pi-bars", "text-2xl!"], [1, "items-center", "bg-surface-0", "dark:bg-surface-900", "grow", "justify-between", "hidden", "lg:flex", "absolute", "lg:static", "w-full", "left-0", "top-full", "px-12", "lg:px-0", "z-20", "rounded-border"], [1, "list-none", "p-0", "m-0", "flex", "lg:items-center", "select-none", "flex-col", "lg:flex-row", "cursor-pointer", "gap-8"], ["pRipple", "", 1, "px-0", "py-4", "text-surface-900", "dark:text-surface-0", "font-medium", "text-xl", 3, "click"], [1, "flex", "border-t", "lg:border-t-0", "border-surface", "py-4", "lg:py-0", "mt-4", "lg:mt-0", "gap-2"], ["pButton", "", "pRipple", "", "label", "Login", "routerLink", "/auth/login", 3, "rounded", "text"], ["pButton", "", "pRipple", "", "label", "Register", "routerLink", "/auth/login", 3, "rounded"], [3, "float"]], template: function TopbarWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "a", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(1, "svg", 1);
      \u0275\u0275element(2, "path", 2);
      \u0275\u0275elementStart(3, "mask", 3);
      \u0275\u0275element(4, "path", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "g", 5);
      \u0275\u0275element(6, "path", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(7, "span", 7);
      \u0275\u0275text(8, "SAKAI");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "a", 8);
      \u0275\u0275element(10, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 10)(12, "ul", 11)(13, "li")(14, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_14_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "home" });
      });
      \u0275\u0275elementStart(15, "span");
      \u0275\u0275text(16, "Home");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(17, "li")(18, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_18_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "features" });
      });
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Features");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "li")(22, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_22_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "highlights" });
      });
      \u0275\u0275elementStart(23, "span");
      \u0275\u0275text(24, "Highlights");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "li")(26, "a", 12);
      \u0275\u0275listener("click", function TopbarWidget_Template_a_click_26_listener() {
        return ctx.router.navigate(["/landing"], { fragment: "pricing" });
      });
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "Pricing");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(29, "div", 13);
      \u0275\u0275element(30, "button", 14)(31, "button", 15)(32, "app-floating-configurator", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("text", true)("rounded", true)("hideOnOutsideClick", true);
      \u0275\u0275advance(21);
      \u0275\u0275property("rounded", true)("text", true);
      \u0275\u0275advance();
      \u0275\u0275property("rounded", true);
      \u0275\u0275advance();
      \u0275\u0275property("float", false);
    }
  }, dependencies: [RouterModule, RouterLink, StyleClassModule, StyleClass, ButtonModule, ButtonDirective, RippleModule, Ripple, AppFloatingConfigurator], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TopbarWidget, [{
    type: Component,
    args: [{
      selector: "topbar-widget",
      imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule, AppFloatingConfigurator],
      template: `<a class="flex items-center" href="#">
            <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 mr-2">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                    fill="var(--primary-color)"
                />
                <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                    <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                </mask>
                <g mask="url(#mask0_1413_1551)">
                    <path
                        d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                        fill="var(--primary-color)"
                    />
                </g>
            </svg>
            <span class="text-surface-900 dark:text-surface-0 font-medium text-2xl leading-normal mr-20">SAKAI</span>
        </a>

        <a pButton [text]="true" severity="secondary" [rounded]="true" pRipple class="lg:hidden!" pStyleClass="@next" enterFromClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars text-2xl!"></i>
        </a>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex absolute lg:static w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class="list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'home' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'features' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Features</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'highlights' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Highlights</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-xl">
                        <span>Pricing</span>
                    </a>
                </li>
            </ul>
            <div class="flex border-t lg:border-t-0 border-surface py-4 lg:py-0 mt-4 lg:mt-0 gap-2">
                <button pButton pRipple label="Login" routerLink="/auth/login" [rounded]="true" [text]="true"></button>
                <button pButton pRipple label="Register" routerLink="/auth/login" [rounded]="true"></button>
                <app-floating-configurator [float]="false" />
            </div>
        </div> `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarWidget, { className: "TopbarWidget", filePath: "src/app/pages/landing/components/topbarwidget.component.ts", lineNumber: 66 });
})();

// src/app/pages/landing/components/herowidget.ts
var HeroWidget = class _HeroWidget {
  static \u0275fac = function HeroWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeroWidget, selectors: [["hero-widget"]], decls: 11, vars: 1, consts: [["id", "hero", 1, "flex", "flex-col", "pt-6", "px-6", "lg:px-20", "overflow-hidden", 2, "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%)", "clip-path", "ellipse(150% 87% at 93% 13%)"], [1, "mx-6", "md:mx-20", "mt-0", "md:mt-6"], [1, "text-6xl", "font-bold", "text-gray-900", "leading-tight", "dark:!text-gray-700"], [1, "font-light", "block"], [1, "font-normal", "text-2xl", "leading-normal", "md:mt-4", "text-gray-700", "dark:text-gray-700"], ["pButton", "", "pRipple", "", "type", "button", "label", "Get Started", 1, "text-xl!", "mt-8", "px-4!", 3, "rounded"], [1, "flex", "justify-center", "md:justify-end"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/screen-1.png", "alt", "Hero Image", 1, "w-9/12", "md:w-auto"]], template: function HeroWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2)(3, "span", 3);
      \u0275\u0275text(4, "Eu sem integer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(5, "eget magna fermentum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275element(10, "img", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("rounded", true);
    }
  }, dependencies: [ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroWidget, [{
    type: Component,
    args: [{
      selector: "hero-widget",
      imports: [ButtonModule, RippleModule],
      template: `
        <div
            id="hero"
            class="flex flex-col pt-6 px-6 lg:px-20 overflow-hidden"
            style="background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, rgb(238, 239, 175) 0%, rgb(195, 227, 250) 100%); clip-path: ellipse(150% 87% at 93% 13%)"
        >
            <div class="mx-6 md:mx-20 mt-0 md:mt-6">
                <h1 class="text-6xl font-bold text-gray-900 leading-tight dark:!text-gray-700"><span class="font-light block">Eu sem integer</span>eget magna fermentum</h1>
                <p class="font-normal text-2xl leading-normal md:mt-4 text-gray-700 dark:text-gray-700">Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...</p>
                <button pButton pRipple [rounded]="true" type="button" label="Get Started" class="text-xl! mt-8 px-4!"></button>
            </div>
            <div class="flex justify-center md:justify-end">
                <img src="https://primefaces.org/cdn/templates/sakai/landing/screen-1.png" alt="Hero Image" class="w-9/12 md:w-auto" />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeroWidget, { className: "HeroWidget", filePath: "src/app/pages/landing/components/herowidget.ts", lineNumber: 25 });
})();

// src/app/pages/landing/components/featureswidget.ts
var FeaturesWidget = class _FeaturesWidget {
  static \u0275fac = function FeaturesWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FeaturesWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FeaturesWidget, selectors: [["features-widget"]], decls: 97, vars: 0, consts: [["id", "features", 1, "py-6", "px-6", "lg:px-20", "mt-8", "mx-0", "lg:mx-20"], [1, "grid", "grid-cols-12", "gap-4", "justify-center"], [1, "col-span-12", "text-center", "mt-20", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pr-8", "lg:pb-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"], [1, "p-4", "bg-surface-0", "dark:bg-surface-900", "h-full", 2, "border-radius", "8px"], [1, "flex", "items-center", "justify-center", "bg-yellow-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-users", "text-2xl!", "text-yellow-700"], [1, "mb-2", "text-surface-900", "dark:text-surface-0"], [1, "text-surface-600", "dark:text-surface-200"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-cyan-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-palette", "text-2xl!", "text-cyan-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pb-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-indigo-200", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-map", "text-2xl!", "text-indigo-700"], [1, "mt-6", "mb-1", "text-surface-900", "dark:text-surface-0", "text-xl", "font-semibold"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-slate-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-id-card", "text-2xl!", "text-slate-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-orange-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-star", "text-2xl!", "text-orange-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-pink-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-moon", "text-2xl!", "text-pink-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg:pr-8", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-teal-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-shopping-cart", "text-2xl!", "text-teal-700"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-blue-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-globe", "text-2xl!", "text-blue-700"], [1, "col-span-12", "md:col-span-12", "lg:col-span-4", "p-0", "lg-4", "mt-6", "lg:mt-0"], [2, "height", "160px", "padding", "2px", "border-radius", "10px", "background", "linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"], [1, "flex", "items-center", "justify-center", "bg-purple-200", "mb-4", 2, "width", "3.5rem", "height", "3.5rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-eye", "text-2xl!", "text-purple-700"], [1, "col-span-12", "mt-20", "mb-20", "p-2", "md:p-20", 2, "border-radius", "20px", "background", "linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"], [1, "flex", "flex-col", "justify-center", "items-center", "text-center", "px-4", "py-4", "md:py-0"], [1, "text-gray-900", "mb-2", "text-3xl", "font-semibold"], [1, "text-gray-600", "text-2xl"], [1, "text-gray-900", "sm:line-height-2", "md:line-height-4", "text-2xl", "mt-6", 2, "max-width", "800px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg", "alt", "Company logo", 1, "mt-6"]], template: function FeaturesWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "Marvelous Features");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "span", 4);
      \u0275\u0275text(6, "Placerat in egestas erat...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8);
      \u0275\u0275domElement(11, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "h5", 10);
      \u0275\u0275text(13, "Easy to Use");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 11);
      \u0275\u0275text(15, "Posuere morbi leo urna molestie.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(16, "div", 5)(17, "div", 12)(18, "div", 7)(19, "div", 13);
      \u0275\u0275domElement(20, "i", 14);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "h5", 10);
      \u0275\u0275text(22, "Fresh Design");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "span", 11);
      \u0275\u0275text(24, "Semper risus in hendrerit.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(25, "div", 15)(26, "div", 16)(27, "div", 7)(28, "div", 17);
      \u0275\u0275domElement(29, "i", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "div", 19);
      \u0275\u0275text(31, "Well Documented");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "span", 11);
      \u0275\u0275text(33, "Non arcu risus quis varius quam quisque.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(34, "div", 5)(35, "div", 20)(36, "div", 7)(37, "div", 21);
      \u0275\u0275domElement(38, "i", 22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "div", 19);
      \u0275\u0275text(40, "Responsive Layout");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "span", 11);
      \u0275\u0275text(42, "Nulla malesuada pellentesque elit.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(43, "div", 5)(44, "div", 23)(45, "div", 7)(46, "div", 24);
      \u0275\u0275domElement(47, "i", 25);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "div", 19);
      \u0275\u0275text(49, "Clean Code");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "span", 11);
      \u0275\u0275text(51, "Condimentum lacinia quis vel eros.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(52, "div", 15)(53, "div", 26)(54, "div", 7)(55, "div", 27);
      \u0275\u0275domElement(56, "i", 28);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(57, "div", 19);
      \u0275\u0275text(58, "Dark Mode");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "span", 11);
      \u0275\u0275text(60, "Convallis tellus id interdum velit laoreet.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(61, "div", 29)(62, "div", 30)(63, "div", 7)(64, "div", 31);
      \u0275\u0275domElement(65, "i", 32);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(66, "div", 19);
      \u0275\u0275text(67, "Ready to Use");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "span", 11);
      \u0275\u0275text(69, "Mauris sit amet massa vitae.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(70, "div", 29)(71, "div", 33)(72, "div", 7)(73, "div", 34);
      \u0275\u0275domElement(74, "i", 35);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "div", 19);
      \u0275\u0275text(76, "Modern Practices");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(77, "span", 11);
      \u0275\u0275text(78, "Elementum nibh tellus molestie nunc non.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(79, "div", 36)(80, "div", 37)(81, "div", 7)(82, "div", 38);
      \u0275\u0275domElement(83, "i", 39);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(84, "div", 19);
      \u0275\u0275text(85, "Privacy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(86, "span", 11);
      \u0275\u0275text(87, "Neque egestas congue quisque.");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(88, "div", 40)(89, "div", 41)(90, "div", 42);
      \u0275\u0275text(91, "Jos\xE9phine Miller");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(92, "span", 43);
      \u0275\u0275text(93, "Peak Interactive");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(94, "p", 44);
      \u0275\u0275text(95, " \u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElement(96, "img", 45);
      \u0275\u0275domElementEnd()()()();
    }
  }, dependencies: [CommonModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FeaturesWidget, [{
    type: Component,
    args: [{
      selector: "features-widget",
      standalone: true,
      imports: [CommonModule],
      template: ` <div id="features" class="py-6 px-6 lg:px-20 mt-8 mx-0 lg:mx-20">
        <div class="grid grid-cols-12 gap-4 justify-center">
            <div class="col-span-12 text-center mt-20 mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Marvelous Features</div>
                <span class="text-muted-color text-2xl">Placerat in egestas erat...</span>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-yellow-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-users text-2xl! text-yellow-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Easy to Use</h5>
                        <span class="text-surface-600 dark:text-surface-200">Posuere morbi leo urna molestie.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-cyan-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-palette text-2xl! text-cyan-700"></i>
                        </div>
                        <h5 class="mb-2 text-surface-900 dark:text-surface-0">Fresh Design</h5>
                        <span class="text-surface-600 dark:text-surface-200">Semper risus in hendrerit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-map text-2xl! text-indigo-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Well Documented</div>
                        <span class="text-surface-600 dark:text-surface-200">Non arcu risus quis varius quam quisque.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-slate-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-id-card text-2xl! text-slate-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Responsive Layout</div>
                        <span class="text-surface-600 dark:text-surface-200">Nulla malesuada pellentesque elit.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-orange-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-star text-2xl! text-orange-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Clean Code</div>
                        <span class="text-surface-600 dark:text-surface-200">Condimentum lacinia quis vel eros.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pb-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-pink-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-moon text-2xl! text-pink-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Dark Mode</div>
                        <span class="text-surface-600 dark:text-surface-200">Convallis tellus id interdum velit laoreet.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-teal-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-shopping-cart text-2xl! text-teal-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Ready to Use</div>
                        <span class="text-surface-600 dark:text-surface-200">Mauris sit amet massa vitae.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-blue-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-globe text-2xl! text-blue-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Modern Practices</div>
                        <span class="text-surface-600 dark:text-surface-200">Elementum nibh tellus molestie nunc non.</span>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-12 lg:col-span-4 p-0 lg-4 mt-6 lg:mt-0">
                <div style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))">
                    <div class="p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-purple-200 mb-4" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-eye text-2xl! text-purple-700"></i>
                        </div>
                        <div class="mt-6 mb-1 text-surface-900 dark:text-surface-0 text-xl font-semibold">Privacy</div>
                        <span class="text-surface-600 dark:text-surface-200">Neque egestas congue quisque.</span>
                    </div>
                </div>
            </div>

            <div
                class="col-span-12 mt-20 mb-20 p-2 md:p-20"
                style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
            >
                <div class="flex flex-col justify-center items-center text-center px-4 py-4 md:py-0">
                    <div class="text-gray-900 mb-2 text-3xl font-semibold">Jos\xE9phine Miller</div>
                    <span class="text-gray-600 text-2xl">Peak Interactive</span>
                    <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-6" style="max-width: 800px">
                        \u201CDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\u201D
                    </p>
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/peak-logo.svg" class="mt-6" alt="Company logo" />
                </div>
            </div>
        </div>
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FeaturesWidget, { className: "FeaturesWidget", filePath: "src/app/pages/landing/components/featureswidget.ts", lineNumber: 139 });
})();

// src/app/pages/landing/components/highlightswidget.ts
var HighlightsWidget = class _HighlightsWidget {
  static \u0275fac = function HighlightsWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HighlightsWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HighlightsWidget, selectors: [["highlights-widget"]], decls: 26, vars: 0, consts: [["id", "highlights", 1, "py-6", "px-6", "lg:px-20", "mx-0", "my-12", "lg:mx-20"], [1, "text-center"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "mt-20", "pb-2", "md:pb-20"], [1, "flex", "justify-center", "col-span-12", "lg:col-span-6", "bg-purple-100", "p-0", "order-1", "lg:order-0", 2, "border-radius", "8px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/mockup.png", "alt", "mockup mobile", 1, "w-11/12"], [1, "col-span-12", "lg:col-span-6", "my-auto", "flex", "flex-col", "lg:items-end", "text-center", "lg:text-right", "gap-4"], [1, "flex", "items-center", "justify-center", "bg-purple-200", "self-center", "lg:self-end", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-mobile", "text-4xl!", "text-purple-700"], [1, "leading-none", "text-surface-900", "dark:text-surface-0", "text-3xl", "font-normal"], [1, "text-surface-700", "dark:text-surface-100", "text-2xl", "leading-normal", "ml-0", "md:ml-2", 2, "max-width", "650px"], [1, "grid", "grid-cols-12", "gap-4", "my-20", "pt-2", "md:pt-20"], [1, "col-span-12", "lg:col-span-6", "my-auto", "flex", "flex-col", "text-center", "lg:text-left", "lg:items-start", "gap-4"], [1, "flex", "items-center", "justify-center", "bg-yellow-200", "self-center", "lg:self-start", 2, "width", "4.2rem", "height", "4.2rem", "border-radius", "10px"], [1, "pi", "pi-fw", "pi-desktop", "text-3xl!", "text-yellow-700"], [1, "text-surface-700", "dark:text-surface-100", "text-2xl", "leading-normal", "mr-0", "md:mr-2", 2, "max-width", "650px"], [1, "flex", "justify-end", "order-1", "sm:order-2", "col-span-12", "lg:col-span-6", "bg-yellow-100", "p-0", 2, "border-radius", "8px"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png", "alt", "mockup", 1, "w-11/12"]], template: function HighlightsWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Powerful Everywhere");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "span", 3);
      \u0275\u0275text(5, "Amet consectetur adipiscing elit...");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(6, "div", 4)(7, "div", 5);
      \u0275\u0275domElement(8, "img", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(9, "div", 7)(10, "div", 8);
      \u0275\u0275domElement(11, "i", 9);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "div", 10);
      \u0275\u0275text(13, "Congue Quisque Egestas");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "span", 11);
      \u0275\u0275text(15, "Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(16, "div", 12)(17, "div", 13)(18, "div", 14);
      \u0275\u0275domElement(19, "i", 15);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(20, "div", 10);
      \u0275\u0275text(21, "Celerisque Eu Ultrices");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "span", 16);
      \u0275\u0275text(23, "Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(24, "div", 17);
      \u0275\u0275domElement(25, "img", 18);
      \u0275\u0275domElementEnd()()();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightsWidget, [{
    type: Component,
    args: [{
      selector: "highlights-widget",
      template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Powerful Everywhere</div>
                <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="grid grid-cols-12 gap-4 mt-20 pb-2 md:pb-20">
                <div class="flex justify-center col-span-12 lg:col-span-6 bg-purple-100 p-0 order-1 lg:order-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup.png" class="w-11/12" alt="mockup mobile" />
                </div>

                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col lg:items-end text-center lg:text-right gap-4">
                    <div class="flex items-center justify-center bg-purple-200 self-center lg:self-end" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-mobile text-4xl! text-purple-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Congue Quisque Egestas</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal ml-0 md:ml-2" style="max-width: 650px"
                        >Lectus arcu bibendum at varius vel pharetra vel turpis nunc. Eget aliquet nibh praesent tristique magna sit amet purus gravida. Sit amet mattis vulputate enim nulla aliquet.</span
                    >
                </div>
            </div>

            <div class="grid grid-cols-12 gap-4 my-20 pt-2 md:pt-20">
                <div class="col-span-12 lg:col-span-6 my-auto flex flex-col text-center lg:text-left lg:items-start gap-4">
                    <div class="flex items-center justify-center bg-yellow-200 self-center lg:self-start" style="width: 4.2rem; height: 4.2rem; border-radius: 10px">
                        <i class="pi pi-fw pi-desktop text-3xl! text-yellow-700"></i>
                    </div>
                    <div class="leading-none text-surface-900 dark:text-surface-0 text-3xl font-normal">Celerisque Eu Ultrices</div>
                    <span class="text-surface-700 dark:text-surface-100 text-2xl leading-normal mr-0 md:mr-2" style="max-width: 650px"
                        >Adipiscing commodo elit at imperdiet dui. Viverra nibh cras pulvinar mattis nunc sed blandit libero. Suspendisse in est ante in. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi.</span
                    >
                </div>

                <div class="flex justify-end order-1 sm:order-2 col-span-12 lg:col-span-6 bg-yellow-100 p-0" style="border-radius: 8px">
                    <img src="https://primefaces.org/cdn/templates/sakai/landing/mockup-desktop.png" class="w-11/12" alt="mockup" />
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HighlightsWidget, { className: "HighlightsWidget", filePath: "src/app/pages/landing/components/highlightswidget.ts", lineNumber: 46 });
})();

// src/app/pages/landing/components/pricingwidget.ts
var PricingWidget = class _PricingWidget {
  static \u0275fac = function PricingWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricingWidget)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingWidget, selectors: [["pricing-widget"]], decls: 97, vars: 0, consts: [["id", "pricing", 1, "py-6", "px-6", "lg:px-20", "my-2", "md:my-6"], [1, "text-center", "mb-6"], [1, "text-surface-900", "dark:text-surface-0", "font-normal", "mb-2", "text-4xl"], [1, "text-muted-color", "text-2xl"], [1, "grid", "grid-cols-12", "gap-4", "justify-between", "mt-20", "md:mt-0"], [1, "col-span-12", "lg:col-span-4", "p-0", "md:p-4"], [1, "p-4", "flex", "flex-col", "border-surface-200", "dark:border-surface-600", "pricing-card", "cursor-pointer", "border-2", "hover:border-primary", "duration-300", "transition-all", 2, "border-radius", "10px"], [1, "text-surface-900", "dark:text-surface-0", "text-center", "my-8", "text-3xl"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/free.svg", "alt", "free", 1, "w-10/12", "mx-auto"], [1, "my-8", "flex", "flex-col", "items-center", "gap-4"], [1, "flex", "items-center"], [1, "text-5xl", "font-bold", "mr-2", "text-surface-900", "dark:text-surface-0"], [1, "text-surface-600", "dark:text-surface-200"], ["pButton", "", "pRipple", "", "label", "Get Started", 1, "p-button-rounded", "border-0", "ml-4", "font-light", "leading-tight", "bg-blue-500", "text-white"], [1, "w-full", "bg-surface-200"], [1, "my-8", "list-none", "p-0", "flex", "text-surface-900", "dark:text-surface-0", "flex-col", "px-8"], [1, "py-2"], [1, "pi", "pi-fw", "pi-check", "text-xl", "text-cyan-500", "mr-2"], [1, "text-xl", "leading-normal"], [1, "col-span-12", "lg:col-span-4", "p-0", "md:p-4", "mt-6", "md:mt-0"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/startup.svg", "alt", "startup", 1, "w-10/12", "mx-auto"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg", "alt", "enterprise", 1, "w-10/12", "mx-auto"], ["pButton", "", "pRipple", "", "label", "Try Free", 1, "p-button-rounded", "border-0", "ml-4", "font-light", "leading-tight", "bg-blue-500", "text-white"]], template: function PricingWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275text(3, "Matchless Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "span", 3);
      \u0275\u0275text(5, "Amet consectetur adipiscing elit...");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7);
      \u0275\u0275text(10, "Free");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "img", 8);
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "span", 11);
      \u0275\u0275text(15, "$0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "span", 12);
      \u0275\u0275text(17, "per month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(18, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "p-divider", 14);
      \u0275\u0275elementStart(20, "ul", 15)(21, "li", 16);
      \u0275\u0275element(22, "i", 17);
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Responsive Layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "li", 16);
      \u0275\u0275element(26, "i", 17);
      \u0275\u0275elementStart(27, "span", 18);
      \u0275\u0275text(28, "Unlimited Push Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "li", 16);
      \u0275\u0275element(30, "i", 17);
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275text(32, "50 Support Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "li", 16);
      \u0275\u0275element(34, "i", 17);
      \u0275\u0275elementStart(35, "span", 18);
      \u0275\u0275text(36, "Free Shipping");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(37, "div", 19)(38, "div", 6)(39, "div", 7);
      \u0275\u0275text(40, "Startup");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "img", 20);
      \u0275\u0275elementStart(42, "div", 9)(43, "div", 10)(44, "span", 11);
      \u0275\u0275text(45, "$1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span", 12);
      \u0275\u0275text(47, "per month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "p-divider", 14);
      \u0275\u0275elementStart(50, "ul", 15)(51, "li", 16);
      \u0275\u0275element(52, "i", 17);
      \u0275\u0275elementStart(53, "span", 18);
      \u0275\u0275text(54, "Responsive Layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(55, "li", 16);
      \u0275\u0275element(56, "i", 17);
      \u0275\u0275elementStart(57, "span", 18);
      \u0275\u0275text(58, "Unlimited Push Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "li", 16);
      \u0275\u0275element(60, "i", 17);
      \u0275\u0275elementStart(61, "span", 18);
      \u0275\u0275text(62, "50 Support Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "li", 16);
      \u0275\u0275element(64, "i", 17);
      \u0275\u0275elementStart(65, "span", 18);
      \u0275\u0275text(66, "Free Shipping");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(67, "div", 19)(68, "div", 6)(69, "div", 7);
      \u0275\u0275text(70, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "img", 21);
      \u0275\u0275elementStart(72, "div", 9)(73, "div", 10)(74, "span", 11);
      \u0275\u0275text(75, "$5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "span", 12);
      \u0275\u0275text(77, "per month");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "button", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275element(79, "p-divider", 14);
      \u0275\u0275elementStart(80, "ul", 15)(81, "li", 16);
      \u0275\u0275element(82, "i", 17);
      \u0275\u0275elementStart(83, "span", 18);
      \u0275\u0275text(84, "Responsive Layout");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "li", 16);
      \u0275\u0275element(86, "i", 17);
      \u0275\u0275elementStart(87, "span", 18);
      \u0275\u0275text(88, "Unlimited Push Messages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "li", 16);
      \u0275\u0275element(90, "i", 17);
      \u0275\u0275elementStart(91, "span", 18);
      \u0275\u0275text(92, "50 Support Ticket");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "li", 16);
      \u0275\u0275element(94, "i", 17);
      \u0275\u0275elementStart(95, "span", 18);
      \u0275\u0275text(96, "Free Shipping");
      \u0275\u0275elementEnd()()()()()()();
    }
  }, dependencies: [DividerModule, Divider, ButtonModule, ButtonDirective, RippleModule, Ripple], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricingWidget, [{
    type: Component,
    args: [{
      selector: "pricing-widget",
      imports: [DividerModule, ButtonModule, RippleModule],
      template: `
        <div id="pricing" class="py-6 px-6 lg:px-20 my-2 md:my-6">
            <div class="text-center mb-6">
                <div class="text-surface-900 dark:text-surface-0 font-normal mb-2 text-4xl">Matchless Pricing</div>
                <span class="text-muted-color text-2xl">Amet consectetur adipiscing elit...</span>
            </div>

            <div class="grid grid-cols-12 gap-4 justify-between mt-20 md:mt-0">
                <div class="col-span-12 lg:col-span-4 p-0 md:p-4">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Free</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/free.svg" class="w-10/12 mx-auto" alt="free" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$0</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Startup</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/startup.svg" class="w-10/12 mx-auto" alt="startup" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$1</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Get Started" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-span-12 lg:col-span-4 p-0 md:p-4 mt-6 md:mt-0">
                    <div class="p-4 flex flex-col border-surface-200 dark:border-surface-600 pricing-card cursor-pointer border-2 hover:border-primary duration-300 transition-all" style="border-radius: 10px">
                        <div class="text-surface-900 dark:text-surface-0 text-center my-8 text-3xl">Enterprise</div>
                        <img src="https://primefaces.org/cdn/templates/sakai/landing/enterprise.svg" class="w-10/12 mx-auto" alt="enterprise" />
                        <div class="my-8 flex flex-col items-center gap-4">
                            <div class="flex items-center">
                                <span class="text-5xl font-bold mr-2 text-surface-900 dark:text-surface-0">$5</span>
                                <span class="text-surface-600 dark:text-surface-200">per month</span>
                            </div>
                            <button pButton pRipple label="Try Free" class="p-button-rounded border-0 ml-4 font-light leading-tight bg-blue-500 text-white"></button>
                        </div>
                        <p-divider class="w-full bg-surface-200"></p-divider>
                        <ul class="my-8 list-none p-0 flex text-surface-900 dark:text-surface-0 flex-col px-8">
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Responsive Layout</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Unlimited Push Messages</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">50 Support Ticket</span>
                            </li>
                            <li class="py-2">
                                <i class="pi pi-fw pi-check text-xl text-cyan-500 mr-2"></i>
                                <span class="text-xl leading-normal">Free Shipping</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingWidget, { className: "PricingWidget", filePath: "src/app/pages/landing/components/pricingwidget.ts", lineNumber: 119 });
})();

// src/app/pages/landing/components/footerwidget.ts
var FooterWidget = class _FooterWidget {
  router;
  constructor(router) {
    this.router = router;
  }
  static \u0275fac = function FooterWidget_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterWidget)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterWidget, selectors: [["footer-widget"]], decls: 57, vars: 0, consts: [[1, "py-12", "px-12", "mx-0", "mt-20", "lg:mx-20"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-2"], [1, "flex", "flex-wrap", "items-center", "justify-center", "md:justify-start", "md:mb-0", "mb-6", "cursor-pointer", 3, "click"], ["viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "h-14", "mr-2"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [1, "font-medium", "text-3xl", "text-surface-900", "dark:text-surface-0"], [1, "col-span-12", "md:col-span-10"], [1, "grid", "grid-cols-12", "gap-8", "text-center", "md:text-left"], [1, "col-span-12", "md:col-span-3"], [1, "font-medium", "text-2xl", "leading-normal", "mb-6", "text-surface-900", "dark:text-surface-0"], [1, "leading-normal", "text-xl", "block", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "text-xl", "block", "cursor-pointer", "text-surface-700", "dark:text-surface-100"], [1, "leading-normal", "text-xl", "flex", "items-center", "cursor-pointer", "mb-2", "text-surface-700", "dark:text-surface-100"], ["src", "https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg", "alt", "badge", 1, "ml-2"]], template: function FooterWidget_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275domListener("click", function FooterWidget_Template_a_click_3_listener() {
        return ctx.router.navigate(["/pages/landing"], { fragment: "home" });
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(4, "svg", 4);
      \u0275\u0275domElement(5, "path", 5);
      \u0275\u0275domElementStart(6, "mask", 6);
      \u0275\u0275domElement(7, "path", 7);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(8, "g", 8);
      \u0275\u0275domElement(9, "path", 9);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(10, "h4", 10);
      \u0275\u0275text(11, "SAKAI");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(12, "div", 11)(13, "div", 12)(14, "div", 13)(15, "h4", 14);
      \u0275\u0275text(16, "Company");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "a", 15);
      \u0275\u0275text(18, "About Us");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "a", 15);
      \u0275\u0275text(20, "News");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "a", 15);
      \u0275\u0275text(22, "Investor Relations");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "a", 15);
      \u0275\u0275text(24, "Careers");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "a", 16);
      \u0275\u0275text(26, "Media Kit");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(27, "div", 13)(28, "h4", 14);
      \u0275\u0275text(29, "Resources");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(30, "a", 15);
      \u0275\u0275text(31, "Get Started");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(32, "a", 15);
      \u0275\u0275text(33, "Learn");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "a", 16);
      \u0275\u0275text(35, "Case Studies");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(36, "div", 13)(37, "h4", 14);
      \u0275\u0275text(38, "Community");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "a", 15);
      \u0275\u0275text(40, "Discord");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "a", 17);
      \u0275\u0275text(42, "Events");
      \u0275\u0275domElement(43, "img", 18);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "a", 15);
      \u0275\u0275text(45, "FAQ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "a", 16);
      \u0275\u0275text(47, "Blog");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(48, "div", 13)(49, "h4", 14);
      \u0275\u0275text(50, "Legal");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "a", 15);
      \u0275\u0275text(52, "Brand Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "a", 15);
      \u0275\u0275text(54, "Privacy Policy");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "a", 16);
      \u0275\u0275text(56, "Terms of Service");
      \u0275\u0275domElementEnd()()()()()();
    }
  }, dependencies: [RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterWidget, [{
    type: Component,
    args: [{
      selector: "footer-widget",
      imports: [RouterModule],
      template: `
        <div class="py-12 px-12 mx-0 mt-20 lg:mx-20">
            <div class="grid grid-cols-12 gap-4">
                <div class="col-span-12 md:col-span-2">
                    <a (click)="router.navigate(['/pages/landing'], { fragment: 'home' })" class="flex flex-wrap items-center justify-center md:justify-start md:mb-0 mb-6 cursor-pointer">
                        <svg viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-14 mr-2">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                                fill="var(--primary-color)"
                            />
                            <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                                <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                            </mask>
                            <g mask="url(#mask0_1413_1551)">
                                <path
                                    d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                                    fill="var(--primary-color)"
                                />
                            </g>
                        </svg>
                        <h4 class="font-medium text-3xl text-surface-900 dark:text-surface-0">SAKAI</h4>
                    </a>
                </div>

                <div class="col-span-12 md:col-span-10">
                    <div class="grid grid-cols-12 gap-8 text-center md:text-left">
                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Company</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">About Us</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">News</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Investor Relations</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Careers</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Media Kit</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Resources</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Get Started</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Learn</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Case Studies</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Community</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Discord</a>
                            <a class="leading-normal text-xl flex items-center cursor-pointer mb-2 text-surface-700 dark:text-surface-100"
                                >Events<img src="https://primefaces.org/cdn/templates/sakai/landing/new-badge.svg" alt="badge" class="ml-2"
                            /></a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">FAQ</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Blog</a>
                        </div>

                        <div class="col-span-12 md:col-span-3">
                            <h4 class="font-medium text-2xl leading-normal mb-6 text-surface-900 dark:text-surface-0">Legal</h4>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Brand Policy</a>
                            <a class="leading-normal text-xl block cursor-pointer mb-2 text-surface-700 dark:text-surface-100">Privacy Policy</a>
                            <a class="leading-normal text-xl block cursor-pointer text-surface-700 dark:text-surface-100">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterWidget, { className: "FooterWidget", filePath: "src/app/pages/landing/components/footerwidget.ts", lineNumber: 73 });
})();

// src/app/pages/landing/landing.ts
var Landing = class _Landing {
  static \u0275fac = function Landing_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Landing)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Landing, selectors: [["app-landing"]], decls: 8, vars: 0, consts: [[1, "bg-surface-0", "dark:bg-surface-900"], ["id", "home", 1, "landing-wrapper", "overflow-hidden"], [1, "py-6", "px-6", "mx-0", "md:mx-12", "lg:mx-20", "lg:px-20", "flex", "items-center", "justify-between", "relative", "lg:static"]], template: function Landing_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "topbar-widget", 2)(3, "hero-widget")(4, "features-widget")(5, "highlights-widget")(6, "pricing-widget")(7, "footer-widget");
      \u0275\u0275elementEnd()();
    }
  }, dependencies: [RouterModule, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Landing, [{
    type: Component,
    args: [{
      selector: "app-landing",
      standalone: true,
      imports: [RouterModule, TopbarWidget, HeroWidget, FeaturesWidget, HighlightsWidget, PricingWidget, FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule],
      template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-6 px-6 mx-0 md:mx-12 lg:mx-20 lg:px-20 flex items-center justify-between relative lg:static" />
                <hero-widget />
                <features-widget />
                <highlights-widget />
                <pricing-widget />
                <footer-widget />
            </div>
        </div>
    `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Landing, { className: "Landing", filePath: "src/app/pages/landing/landing.ts", lineNumber: 31 });
})();

// src/app/pages/notfound/notfound.ts
var Notfound = class _Notfound {
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 42, vars: 0, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], ["width", "54", "height", "40", "viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mb-8", "w-32", "shrink-0"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "text-primary", "font-bold", "text-3xl"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-surface-600", "dark:text-surface-200", "mb-8"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "flex", "justify-center", "items-center", "border-2", "border-primary", "text-primary", "rounded-border", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-table", "text-2xl!"], [1, "ml-6", "flex", "flex-col"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "text-surface-600", "dark:text-surface-200", "lg:text-xl"], [1, "pi", "pi-fw", "pi-question-circle", "text-2xl!"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "mb-8", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "pi", "pi-fw", "pi-unlock", "text-2xl!"], ["label", "Go to Dashboard", "routerLink", "/"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 2);
      \u0275\u0275element(4, "path", 3);
      \u0275\u0275elementStart(5, "mask", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "g", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 11);
      \u0275\u0275text(14, "Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "Requested resource is not available.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 13)(18, "span", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 16)(21, "span", 17);
      \u0275\u0275text(22, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Ultricies mi quis hendrerit dolor.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "a", 13)(26, "span", 14);
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 16)(29, "span", 20);
      \u0275\u0275text(30, "Solution Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275text(32, "Phasellus faucibus scelerisque eleifend.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "a", 21)(34, "span", 14);
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 16)(37, "span", 20);
      \u0275\u0275text(38, "Permission Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 18);
      \u0275\u0275text(40, "Accumsan in nisl nisi scelerisque");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(41, "p-button", 23);
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule, RouterLink, AppFloatingConfigurator, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notfound, [{
    type: Component,
    args: [{
      selector: "app-notfound",
      standalone: true,
      imports: [RouterModule, AppFloatingConfigurator, ButtonModule],
      template: ` <app-floating-configurator />
        <div class="flex items-center justify-center min-h-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-32 shrink-0">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style="border-radius: 53px">
                        <span class="text-primary font-bold text-3xl">404</span>
                        <h1 class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                        <div class="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-table text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0 block">Frequently Asked Questions</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Ultricies mi quis hendrerit dolor.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-question-circle text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Solution Center</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Phasellus faucibus scelerisque eleifend.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center mb-8 py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-unlock text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Permission Manager</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Accumsan in nisl nisi scelerisque</span>
                            </span>
                        </a>
                        <p-button label="Go to Dashboard" routerLink="/" />
                    </div>
                </div>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 68 });
})();

// src/app/pages/crm/customers.ts
var _c04 = () => ({ width: "min(58rem, 95vw)" });
var _c13 = () => ({ width: "min(52rem, 95vw)" });
var _c22 = () => ({ width: "min(34rem, 95vw)" });
var _c3 = () => ({ width: "min(48rem, 95vw)" });
var _c4 = () => ({ width: "min(32rem, 95vw)" });
var _forTrack05 = ($index, $item) => $item.id;
function Customers_Conditional_11_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 58);
    \u0275\u0275text(2, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "M\xFC\u015Fterinin ad\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Telefon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 38);
    \u0275\u0275text(8, "Bor\xE7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "th");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_11_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 56);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 59);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "p-button", 61);
    \u0275\u0275listener("onClick", function Customers_Conditional_11_ng_template_11_Template_p_button_onClick_14_listener() {
      const customer_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectCustomer(customer_r5));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customer_r5 = ctx.$implicit;
    const rowIndex_r6 = ctx.rowIndex;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(rowIndex_r6 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(customer_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r5.mobilePhone || customer_r5.workPhone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 6, customer_r5.debt, "1.2-2"), " TL");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", customer_r5.status)("severity", customer_r5.status === "Aktif" ? "success" : "secondary");
  }
}
function Customers_Conditional_11_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 62);
    \u0275\u0275text(2, "M\xFC\u015Fteri bulunamad\u0131.");
    \u0275\u0275elementEnd()();
  }
}
function Customers_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 52)(2, "div")(3, "span", 6);
    \u0275\u0275text(4, "M\xFC\u015Fteri listesi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 53);
    \u0275\u0275listener("input", function Customers_Conditional_11_Template_input_input_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filter($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p-table", 54);
    \u0275\u0275template(9, Customers_Conditional_11_ng_template_9_Template, 12, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, Customers_Conditional_11_ng_template_11_Template, 15, 9, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, Customers_Conditional_11_ng_template_13_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 55)(16, "span", 56);
    \u0275\u0275text(17, "T\xFCm m\xFC\u015Fterilerin veresiye toplam\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 57);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.filteredCustomers.length, " kay\u0131t");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.filteredCustomers)("paginator", true)("rows", 8)("responsiveLayout", "scroll");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(20, 6, ctx_r2.totalDebt, "1.2-2"), " TL");
  }
}
function Customers_Conditional_12_Conditional_111_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 116);
    \u0275\u0275listener("click", function Customers_Conditional_12_Conditional_111_For_2_Template_button_click_0_listener() {
      const repair_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openRepairDetails(repair_r9));
    });
    \u0275\u0275elementStart(1, "span")(2, "strong", 117);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "span", 38);
    \u0275\u0275element(7, "p-tag", 60)(8, "i", 118);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const repair_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(repair_r9.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", repair_r9.date, " \xB7 TMR-", repair_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", repair_r9.status)("severity", repair_r9.status === "Tamamland\u0131" ? "success" : "warn");
  }
}
function Customers_Conditional_12_Conditional_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, Customers_Conditional_12_Conditional_111_For_2_Template, 9, 5, "button", 115, _forTrack05);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.selectedRepairs);
  }
}
function Customers_Conditional_12_Conditional_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 108);
    \u0275\u0275text(1, "Bu m\xFC\u015Fteriye ait tamamlanm\u0131\u015F veya devam eden tamir bulunmuyor.");
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "p-button", 64);
    \u0275\u0275listener("onClick", function Customers_Conditional_12_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.backToList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "p-tag", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "div", 66);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 67)(7, "span", 68);
    \u0275\u0275text(8, "M\xFC\u015Fteri detay kart\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 69)(10, "h1", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "p-tag", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 70)(14, "span");
    \u0275\u0275element(15, "i", 71);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275element(18, "i", 72);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275element(21, "i", 73);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "p-button", 74);
    \u0275\u0275listener("onClick", function Customers_Conditional_12_Template_p_button_onClick_23_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(ctx_r2.selectedCustomer));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 13)(25, "div", 75)(26, "div", 76)(27, "div", 77)(28, "div")(29, "span", 6);
    \u0275\u0275text(30, "Cari hesap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h2", 37);
    \u0275\u0275text(32, "Finansal \xF6zet");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(33, "i", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 79)(35, "div", 80)(36, "span", 81);
    \u0275\u0275text(37, "TL borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong", 82);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 83)(42, "span", 81);
    \u0275\u0275text(43, "Alt\u0131n borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "strong", 84);
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 85)(48, "span", 81);
    \u0275\u0275text(49, "Kalan taksit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "strong", 86);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 80)(54, "span", 81);
    \u0275\u0275text(55, "\u0130\u015F\xE7ilik toplam\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "strong", 86);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 83)(60, "span", 81);
    \u0275\u0275text(61, "Maden toplam\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "strong", 86);
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 87)(66, "div", 88);
    \u0275\u0275element(67, "i", 89);
    \u0275\u0275elementStart(68, "span");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "div", 88);
    \u0275\u0275element(72, "i", 90);
    \u0275\u0275elementStart(73, "span");
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 88);
    \u0275\u0275element(76, "i", 91);
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 92)(80, "div", 93)(81, "span", 94);
    \u0275\u0275text(82, "Kredi limiti kullan\u0131m\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "strong");
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "number");
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div", 95);
    \u0275\u0275element(88, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "small", 96);
    \u0275\u0275text(90);
    \u0275\u0275pipe(91, "number");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(92, "div", 97)(93, "div", 98)(94, "div", 99)(95, "div")(96, "span", 6);
    \u0275\u0275text(97, "Tamir ge\xE7mi\u015Fi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "h2", 37);
    \u0275\u0275text(99);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(100, "i", 100);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "div", 101)(102, "p-button", 102);
    \u0275\u0275listener("onClick", function Customers_Conditional_12_Template_p_button_onClick_102_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDebtDetails());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "p-button", 103);
    \u0275\u0275listener("onClick", function Customers_Conditional_12_Template_p_button_onClick_103_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openManualDebt());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p-button", 104);
    \u0275\u0275listener("onClick", function Customers_Conditional_12_Template_p_button_onClick_104_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCustomerCollection());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "div", 105)(106, "div", 106)(107, "h3", 107);
    \u0275\u0275text(108, "\xD6nceki tamir i\u015Flemleri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "span", 68);
    \u0275\u0275text(110);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(111, Customers_Conditional_12_Conditional_111_Template, 3, 0, "div", 5)(112, Customers_Conditional_12_Conditional_112_Template, 2, 0, "p", 108);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "div", 25)(114, "div", 109)(115, "div", 77)(116, "div")(117, "span", 6);
    \u0275\u0275text(118, "M\xFC\u015Fteri ileti\u015Fimi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "h2", 37);
    \u0275\u0275text(120, "\u0130leti\u015Fim ve notlar");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(121, "i", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(122, "div", 111)(123, "div", 112);
    \u0275\u0275element(124, "i", 113);
    \u0275\u0275elementStart(125, "div")(126, "span", 39);
    \u0275\u0275text(127, "E-posta");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "strong");
    \u0275\u0275text(129);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(130, "div", 112);
    \u0275\u0275element(131, "i", 73);
    \u0275\u0275elementStart(132, "div")(133, "span", 39);
    \u0275\u0275text(134, "Adres");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "strong");
    \u0275\u0275text(136);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(137, "div", 112);
    \u0275\u0275element(138, "i", 114);
    \u0275\u0275elementStart(139, "div")(140, "span", 39);
    \u0275\u0275text(141, "\xD6zel not");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(142, "strong");
    \u0275\u0275text(143);
    \u0275\u0275elementEnd()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.selectedDebtStatus)("severity", ctx_r2.selectedCustomer.debt > 0 || ctx_r2.selectedCustomer.goldDebtGrams > 0 ? "warn" : "success");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.name.charAt(0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.selectedCustomer.status)("severity", ctx_r2.selectedCustomer.status === "Aktif" ? "success" : "secondary");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.mobilePhone || ctx_r2.selectedCustomer.workPhone || "Telefon yok");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.taxNumber || "Vergi numaras\u0131 yok");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.address || "Adres yok");
    \u0275\u0275advance(17);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(40, 29, ctx_r2.selectedCustomer.debt, "1.2-2"), " TL");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(46, 32, ctx_r2.selectedCustomer.goldDebtGrams, "1.3-3"), " gr");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(52, 35, ctx_r2.selectedCustomer.installmentTotal, "1.2-2"), " TL");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(58, 38, ctx_r2.selectedLaborTotal, "1.2-2"), " TL");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(64, 41, ctx_r2.selectedMetalTotal, "1.3-3"), " gr");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(70, 44, ctx_r2.selectedCustomer.creditLimit, "1.2-2"), " TL kredi limiti");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRepairs.length, " tamir kayd\u0131");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.notes || "\xD6zel not bulunmuyor");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(85, 47, ctx_r2.selectedCustomer.debt, "1.2-2"), " / ", \u0275\u0275pipeBind2(86, 50, ctx_r2.selectedCustomer.creditLimit, "1.2-2"), " TL");
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r2.selectedCreditUsagePercent, "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(91, 53, ctx_r2.selectedCreditUsagePercent, "1.0-0"), "% kullan\u0131m");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRepairs.length, " i\u015Flem");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r2.selectedCustomer.debt <= 0 && ctx_r2.selectedCustomer.goldDebtGrams <= 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedRepairs.length, " kay\u0131t");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedRepairs.length ? 111 : 112);
    \u0275\u0275advance(18);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.email || "Bilgi yok");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.address || "Bilgi yok");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.notes || "Not eklenmemi\u015F");
  }
}
function Customers_ng_template_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 119);
    \u0275\u0275listener("onClick", function Customers_ng_template_51_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 120);
    \u0275\u0275listener("onClick", function Customers_ng_template_51_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.save());
    });
    \u0275\u0275elementEnd();
  }
}
function Customers_ng_template_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Tarih");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "A\xE7\u0131klama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\u0130\u015Flem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 38);
    \u0275\u0275text(8, "Tutar");
    \u0275\u0275elementEnd()();
  }
}
function Customers_ng_template_85_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const transaction_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, transaction_r11.amount, "1.2-2"), " TL");
  }
}
function Customers_ng_template_85_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const transaction_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(2, 1, transaction_r11.goldGrams, "1.3-3"), " gr alt\u0131n");
  }
}
function Customers_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275element(6, "p-tag", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 59)(8, "span", 121);
    \u0275\u0275conditionalCreate(9, Customers_ng_template_85_Conditional_9_Template, 3, 4, "span");
    \u0275\u0275conditionalCreate(10, Customers_ng_template_85_Conditional_10_Template, 3, 4, "span", 45);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transaction_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r11.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r11.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", transaction_r11.type)("severity", transaction_r11.type === "Bor\xE7" ? "danger" : "success");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(transaction_r11.amount ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(transaction_r11.goldGrams ? 10 : -1);
  }
}
function Customers_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 122);
    \u0275\u0275text(2, "Bor\xE7 hareketi bulunmuyor.");
    \u0275\u0275elementEnd()();
  }
}
function Customers_Conditional_90_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 128);
    \u0275\u0275text(2, "Nakit tahsilat tutar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 129);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_90_Conditional_23_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.customerCollectionAmount, $event) || (ctx_r2.customerCollectionAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerCollectionAmount);
  }
}
function Customers_Conditional_90_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 130);
    \u0275\u0275text(2, "Tahsil edilen alt\u0131n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 131);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_90_Conditional_24_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.customerCollectionGoldGrams, $event) || (ctx_r2.customerCollectionGoldGrams = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerCollectionGoldGrams);
    \u0275\u0275property("min", 1e-3)("minFractionDigits", 3)("maxFractionDigits", 3);
  }
}
function Customers_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div")(2, "span", 6);
    \u0275\u0275text(3, "Tahsilat yap\u0131lacak m\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 123)(7, "div", 124)(8, "span", 43);
    \u0275\u0275text(9, "TL borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 125)(14, "span", 43);
    \u0275\u0275text(15, "Alt\u0131n borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div")(20, "label", 126);
    \u0275\u0275text(21, "Tahsilat t\xFCr\xFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-select", 127);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_90_Template_p_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customerCollectionType, $event) || (ctx_r2.customerCollectionType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, Customers_Conditional_90_Conditional_23_Template, 4, 1, "div")(24, Customers_Conditional_90_Conditional_24_Template, 4, 4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 6, ctx_r2.selectedCustomer.debt, "1.2-2"), " TL");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 9, ctx_r2.selectedCustomer.goldDebtGrams, "1.3-3"), " gr");
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r2.collectionTypes);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customerCollectionType);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.customerCollectionType === "Nakit" ? 23 : 24);
  }
}
function Customers_ng_template_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 119);
    \u0275\u0275listener("onClick", function Customers_ng_template_91_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.customerCollectionDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 132);
    \u0275\u0275listener("onClick", function Customers_ng_template_91_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.collectCustomerDebt());
    });
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_94_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 135);
    \u0275\u0275text(2, "Eklenecek TL borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 136);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_94_Conditional_23_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.manualDebtAmount, $event) || (ctx_r2.manualDebtAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualDebtAmount);
  }
}
function Customers_Conditional_94_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 137);
    \u0275\u0275text(2, "Eklenecek alt\u0131n");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-inputnumber", 138);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_94_Conditional_24_Template_p_inputnumber_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.manualDebtGoldGrams, $event) || (ctx_r2.manualDebtGoldGrams = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualDebtGoldGrams);
    \u0275\u0275property("min", 1e-3)("minFractionDigits", 3)("maxFractionDigits", 3);
  }
}
function Customers_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div")(2, "span", 6);
    \u0275\u0275text(3, "Bor\xE7 eklenecek m\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 123)(7, "div", 124)(8, "span", 43);
    \u0275\u0275text(9, "Mevcut TL borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 125)(14, "span", 43);
    \u0275\u0275text(15, "Mevcut alt\u0131n borcu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div")(20, "label", 133);
    \u0275\u0275text(21, "Bor\xE7 t\xFCr\xFC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p-select", 134);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_94_Template_p_select_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.manualDebtType, $event) || (ctx_r2.manualDebtType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, Customers_Conditional_94_Conditional_23_Template, 4, 1, "div")(24, Customers_Conditional_94_Conditional_24_Template, 4, 4, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedCustomer.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 6, ctx_r2.selectedCustomer.debt, "1.2-2"), " TL");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 9, ctx_r2.selectedCustomer.goldDebtGrams, "1.3-3"), " gr");
    \u0275\u0275advance(5);
    \u0275\u0275property("options", ctx_r2.collectionTypes);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.manualDebtType);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.manualDebtType === "Nakit" ? 23 : 24);
  }
}
function Customers_ng_template_95_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 119);
    \u0275\u0275listener("onClick", function Customers_ng_template_95_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.manualDebtDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 139);
    \u0275\u0275listener("onClick", function Customers_ng_template_95_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addManualDebt());
    });
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_98_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 145);
    \u0275\u0275listener("onClick", function Customers_Conditional_98_Conditional_31_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openCollection(ctx_r2.selectedRepair));
    });
    \u0275\u0275elementEnd();
  }
}
function Customers_Conditional_98_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-tag", 144);
  }
}
function Customers_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "div")(2, "span", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "p-tag", 60);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 141)(10, "div", 124)(11, "span", 81);
    \u0275\u0275text(12, "Yap\u0131lan i\u015F\xE7ilikler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 124)(16, "span", 81);
    \u0275\u0275text(17, "K\u0131ymetli madenler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 142)(21, "span");
    \u0275\u0275text(22, "\u0130\u015F\xE7ilik: ");
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Maden: ");
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(31, Customers_Conditional_98_Conditional_31_Template, 1, 0, "p-button", 143)(32, Customers_Conditional_98_Conditional_32_Template, 1, 0, "p-tag", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("TMR-", ctx_r2.selectedRepair.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedRepair.product);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.selectedRepair.date);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.selectedRepair.status)("severity", ctx_r2.selectedRepair.status === "Tamamland\u0131" ? "success" : "warn");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.selectedRepair.labors);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedRepair.metals || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(25, 10, ctx_r2.selectedRepair.laborTotal, "1.2-2"), " TL");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 13, ctx_r2.selectedRepair.metalTotal, "1.3-3"), " gr");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.selectedRepair.status === "Tamamland\u0131" && ctx_r2.selectedRepair.collected < ctx_r2.selectedRepair.laborTotal ? 31 : ctx_r2.selectedRepair.status === "Tamamland\u0131" ? 32 : -1);
  }
}
function Customers_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48)(1, "div")(2, "span", 6);
    \u0275\u0275text(3, "Tahsil edilecek i\u015Flem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3", 37);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 146)(7, "span");
    \u0275\u0275text(8, "Kalan tutar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "label", 147);
    \u0275\u0275text(14, "Tahsilat tutar\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-inputnumber", 148);
    \u0275\u0275twoWayListener("ngModelChange", function Customers_Conditional_100_Template_p_inputnumber_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.collectionAmount, $event) || (ctx_r2.collectionAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.selectedRepair.product, " \xB7 TMR-", ctx_r2.selectedRepair.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 4, ctx_r2.selectedRepair.laborTotal - ctx_r2.selectedRepair.collected, "1.2-2"), " TL");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.collectionAmount);
  }
}
function Customers_ng_template_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 119);
    \u0275\u0275listener("onClick", function Customers_ng_template_101_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.collectionDialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 132);
    \u0275\u0275listener("onClick", function Customers_ng_template_101_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.collectRepair());
    });
    \u0275\u0275elementEnd();
  }
}
var Customers = class _Customers {
  customers = [
    {
      id: 1,
      name: "AL\u0130 \xD6ZCAN",
      mobilePhone: "0532 555 10 10",
      workPhone: "",
      taxNumber: "1234567890",
      address: "\u0130stanbul",
      email: "ali@example.com",
      notes: "",
      creditLimit: 1e4,
      installmentTotal: 0,
      debt: 155,
      goldDebtGrams: 0,
      status: "Aktif"
    },
    { id: 2, name: "ALTINKENT", mobilePhone: "", workPhone: "0212 555 20 20", taxNumber: "2345678901", address: "\u0130stanbul", email: "", notes: "", creditLimit: 25e3, installmentTotal: 1605, debt: 1605, goldDebtGrams: 2.35, status: "Aktif" },
    { id: 3, name: "ARZU PIRLANTA", mobilePhone: "0542 555 30 30", workPhone: "", taxNumber: "3456789012", address: "\u0130zmir", email: "", notes: "", creditLimit: 15e3, installmentTotal: 0, debt: 0, goldDebtGrams: 0, status: "Aktif" },
    { id: 4, name: "ATASAY ARENA PARK", mobilePhone: "", workPhone: "0216 555 40 40", taxNumber: "4567890123", address: "\u0130stanbul", email: "", notes: "", creditLimit: 3e4, installmentTotal: 1160, debt: 1160, goldDebtGrams: 0, status: "Aktif" },
    { id: 5, name: "ATE\u015E SARRAF\u0130YE", mobilePhone: "0551 555 50 50", workPhone: "", taxNumber: "5678901234", address: "Ankara", email: "", notes: "", creditLimit: 12e3, installmentTotal: 0, debt: 0, goldDebtGrams: 0, status: "Aktif" }
  ];
  filteredCustomers = [...this.customers];
  selectedCustomer = null;
  dialogVisible = false;
  editingId = null;
  draft = this.emptyCustomer();
  repairDialogVisible = false;
  debtDialogVisible = false;
  selectedRepair = null;
  repairHistory = [
    { id: 1001, customerId: 1, product: "Alt\u0131n bileklik", status: "Ba\u015Flad\u0131", date: "20.09.2026 10:15", laborTotal: 350, metalTotal: 1.25, metals: "Alt\u0131n 1,250 gr", labors: "Kaynak i\u015F\xE7ili\u011Fi", collected: 0 },
    { id: 1e3, customerId: 3, product: "P\u0131rlanta y\xFCz\xFCk", status: "Tamamland\u0131", date: "19.09.2026 14:40", laborTotal: 250, metalTotal: 0, metals: "", labors: "Cila i\u015F\xE7ili\u011Fi", collected: 0 },
    { id: 999, customerId: 2, product: "Alt\u0131n y\xFCz\xFCk", status: "Ba\u015Flad\u0131", date: "19.09.2026 11:25", laborTotal: 500, metalTotal: 0.85, metals: "Alt\u0131n 0,850 gr", labors: "Ta\u015F takma i\u015F\xE7ili\u011Fi", collected: 0 },
    { id: 998, customerId: 4, product: "G\xFCm\xFC\u015F kolye", status: "Ba\u015Flad\u0131", date: "18.09.2026 16:05", laborTotal: 300, metalTotal: 0, metals: "", labors: "\xD6l\xE7\xFC k\xFC\xE7\xFCltme", collected: 0 }
  ];
  collectionDialogVisible = false;
  collectionAmount = 0;
  customerCollectionDialogVisible = false;
  customerCollectionType = "Nakit";
  customerCollectionAmount = 0;
  customerCollectionGoldGrams = 0;
  collectionTypes = ["Nakit", "Alt\u0131n"];
  debtDialogMode = "view";
  manualDebtDialogVisible = false;
  manualDebtType = "Nakit";
  manualDebtAmount = 0;
  manualDebtGoldGrams = 0;
  debtTransactions = {
    1: [
      { date: "20.09.2026", description: "Tamir i\u015F\xE7ili\u011Fi - TMR-1001", type: "Bor\xE7", amount: 350 },
      { date: "15.09.2026", description: "Nakit tahsilat", type: "Tahsilat", amount: 195 }
    ],
    2: [{ date: "19.09.2026", description: "Tamir i\u015F\xE7ili\u011Fi ve maden", type: "Bor\xE7", amount: 1605, goldGrams: 2.35 }],
    3: [],
    4: [{ date: "18.09.2026", description: "Tamir i\u015F\xE7ili\u011Fi - TMR-998", type: "Bor\xE7", amount: 300 }],
    5: []
  };
  get totalDebt() {
    return this.customers.reduce((total, customer) => total + customer.debt, 0);
  }
  get selectedRepairs() {
    return this.selectedCustomer ? this.repairHistory.filter((repair) => repair.customerId === this.selectedCustomer?.id) : [];
  }
  get selectedLaborTotal() {
    return this.selectedRepairs.reduce((total, repair) => total + repair.laborTotal, 0);
  }
  get selectedMetalTotal() {
    return this.selectedRepairs.reduce((total, repair) => total + repair.metalTotal, 0);
  }
  get selectedCreditUsagePercent() {
    if (!this.selectedCustomer?.creditLimit)
      return 0;
    return Math.min(100, this.selectedCustomer.debt / this.selectedCustomer.creditLimit * 100);
  }
  get selectedDebtStatus() {
    if (!this.selectedCustomer)
      return "Bor\xE7 bilgisi yok";
    if (this.selectedCustomer.debt <= 0 && this.selectedCustomer.goldDebtGrams <= 0)
      return "Bor\xE7 bulunmuyor";
    if (this.selectedCustomer.creditLimit > 0 && this.selectedCustomer.debt >= this.selectedCustomer.creditLimit)
      return "Limit dolu";
    return "A\xE7\u0131k hesap";
  }
  get selectedDebtTransactions() {
    return this.selectedCustomer ? this.debtTransactions[this.selectedCustomer.id] ?? [] : [];
  }
  filter(event) {
    const value = event.target.value.toLocaleLowerCase("tr-TR");
    this.filteredCustomers = this.customers.filter((customer) => Object.values(customer).some((field) => String(field).toLocaleLowerCase("tr-TR").includes(value)));
  }
  selectCustomer(customer) {
    this.selectedCustomer = customer && !Array.isArray(customer) ? customer : null;
  }
  openDebtDetails() {
    this.debtDialogMode = "view";
    this.debtDialogVisible = true;
  }
  openManualDebt() {
    if (!this.selectedCustomer)
      return;
    this.manualDebtType = "Nakit";
    this.manualDebtAmount = 0;
    this.manualDebtGoldGrams = 0;
    this.manualDebtDialogVisible = true;
  }
  openCustomerCollection() {
    if (!this.selectedCustomer)
      return;
    this.customerCollectionType = "Nakit";
    this.customerCollectionAmount = 0;
    this.customerCollectionGoldGrams = 0;
    this.customerCollectionDialogVisible = true;
  }
  openRepairDetails(repair) {
    this.selectedRepair = repair;
    this.repairDialogVisible = true;
  }
  backToList() {
    this.selectedCustomer = null;
  }
  openCollection(repair) {
    if (repair.status === "Tamamland\u0131") {
      this.collectionAmount = repair.laborTotal - repair.collected;
      this.collectionDialogVisible = true;
    }
  }
  collectRepair() {
    if (!this.selectedRepair || this.collectionAmount <= 0)
      return;
    const amount = Math.min(this.selectedRepair.laborTotal - this.selectedRepair.collected, this.collectionAmount);
    this.selectedRepair.collected += amount;
    if (this.selectedCustomer) {
      this.selectedCustomer.debt = Math.max(0, this.selectedCustomer.debt - amount);
      this.debtTransactions[this.selectedCustomer.id] = [
        ...this.debtTransactions[this.selectedCustomer.id] ?? [],
        { date: (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR"), description: `Tamir tahsilat\u0131 - TMR-${this.selectedRepair.id}`, type: "Tahsilat", amount }
      ];
    }
    this.collectionDialogVisible = false;
    this.repairDialogVisible = false;
  }
  collectCustomerDebt() {
    if (!this.selectedCustomer)
      return;
    const customer = this.selectedCustomer;
    if (this.customerCollectionType === "Nakit" && this.customerCollectionAmount > 0) {
      const amount = Math.min(customer.debt, this.customerCollectionAmount);
      customer.debt -= amount;
      this.debtTransactions[customer.id] = [...this.debtTransactions[customer.id] ?? [], { date: (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR"), description: "M\xFC\u015Fteri nakit tahsilat\u0131", type: "Tahsilat", amount }];
    } else if (this.customerCollectionType === "Alt\u0131n" && this.customerCollectionGoldGrams > 0) {
      const grams = Math.min(customer.goldDebtGrams, this.customerCollectionGoldGrams);
      customer.goldDebtGrams -= grams;
      this.debtTransactions[customer.id] = [...this.debtTransactions[customer.id] ?? [], { date: (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR"), description: "M\xFC\u015Fteri alt\u0131n tahsilat\u0131", type: "Tahsilat", amount: 0, goldGrams: grams }];
    } else {
      return;
    }
    this.customerCollectionDialogVisible = false;
  }
  addManualDebt() {
    if (!this.selectedCustomer)
      return;
    const customer = this.selectedCustomer;
    if (this.manualDebtType === "Nakit" && this.manualDebtAmount > 0) {
      customer.debt += this.manualDebtAmount;
      this.debtTransactions[customer.id] = [...this.debtTransactions[customer.id] ?? [], { date: (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR"), description: "Manuel TL bor\xE7 ekleme", type: "Bor\xE7", amount: this.manualDebtAmount }];
    } else if (this.manualDebtType === "Alt\u0131n" && this.manualDebtGoldGrams > 0) {
      customer.goldDebtGrams += this.manualDebtGoldGrams;
      this.debtTransactions[customer.id] = [...this.debtTransactions[customer.id] ?? [], { date: (/* @__PURE__ */ new Date()).toLocaleDateString("tr-TR"), description: "Manuel alt\u0131n bor\xE7 ekleme", type: "Bor\xE7", amount: 0, goldGrams: this.manualDebtGoldGrams }];
    } else {
      return;
    }
    this.manualDebtDialogVisible = false;
  }
  openNew() {
    this.editingId = null;
    this.draft = this.emptyCustomer();
    this.dialogVisible = true;
  }
  edit(customer) {
    this.editingId = customer.id;
    this.draft = __spreadValues({}, customer);
    this.dialogVisible = true;
  }
  save() {
    if (!this.draft.name.trim())
      return;
    if (this.editingId === null)
      this.customers = [...this.customers, __spreadProps(__spreadValues({}, this.draft), { id: Date.now(), debt: 0 })];
    else
      this.customers = this.customers.map((customer) => customer.id === this.editingId ? __spreadProps(__spreadValues({}, this.draft), { id: this.editingId }) : customer);
    this.filteredCustomers = [...this.customers];
    this.selectedCustomer = this.customers.find((customer) => customer.id === (this.editingId ?? this.customers[this.customers.length - 1].id)) ?? null;
    this.dialogVisible = false;
  }
  showInfo(message) {
    window.alert(message);
  }
  emptyCustomer() {
    return { id: 0, name: "", mobilePhone: "", workPhone: "", taxNumber: "", address: "", email: "", notes: "", creditLimit: 0, installmentTotal: 0, debt: 0, goldDebtGrams: 0, status: "Aktif" };
  }
  static \u0275fac = function Customers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Customers)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Customers, selectors: [["app-customers"]], decls: 103, vars: 70, consts: [["footer", ""], ["header", ""], ["body", ""], ["emptymessage", ""], [1, "compact-list-page", "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "gap-2"], [1, "text-muted-color"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "m-0"], [1, "text-muted-color", "mt-1", "mb-0"], ["label", "M\xFC\u015Fteri ekle", "icon", "pi pi-plus", 3, "onClick"], [1, "card"], [3, "visibleChange", "visible", "modal", "draggable", "header"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-6"], ["for", "name", 1, "block", "font-medium", "mb-2"], ["id", "name", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "block", "font-medium", "mb-2"], ["id", "email", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "mobilePhone", 1, "block", "font-medium", "mb-2"], ["id", "mobilePhone", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "workPhone", 1, "block", "font-medium", "mb-2"], ["id", "workPhone", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "taxNumber", 1, "block", "font-medium", "mb-2"], ["id", "taxNumber", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "col-span-12"], ["for", "address", 1, "block", "font-medium", "mb-2"], ["id", "address", "pTextarea", "", "rows", "2", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "col-span-12", "md:col-span-4"], ["for", "creditLimit", 1, "block", "font-medium", "mb-2"], ["inputId", "creditLimit", "mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "installmentTotal", 1, "block", "font-medium", "mb-2"], ["inputId", "installmentTotal", "mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "notes", 1, "block", "font-medium", "mb-2"], ["id", "notes", "pTextarea", "", "rows", "3", 1, "w-full", 3, "ngModelChange", "ngModel"], ["header", "Bor\xE7 detay\u0131", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "items-center", "justify-between", "gap-4", "mb-4"], [1, "text-xl", "font-semibold", "mt-1", "mb-0"], [1, "text-right"], [1, "block", "text-xs", "text-muted-color"], [1, "block", "text-xl", "text-orange-500"], [1, "text-sm", "text-yellow-700"], [1, "debt-dialog-summary"], [1, "block", "text-sm", "text-muted-color"], [1, "text-orange-500"], [1, "text-yellow-700"], [3, "value", "responsiveLayout"], ["header", "M\xFC\u015Fteri tahsilat\u0131", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "flex-col", "gap-4"], ["header", "Manuel bor\xE7 ekle", 3, "visibleChange", "visible", "modal", "draggable"], ["header", "Tamir detay\u0131", 3, "visibleChange", "visible", "modal", "draggable"], ["header", "Tamir tahsilat\u0131", 3, "visibleChange", "visible", "modal", "draggable"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4", "mb-4"], ["pInputText", "", "type", "text", "placeholder", "M\xFC\u015Fteri ara...", 1, "w-full", "md:w-72", 3, "input"], ["dataKey", "id", 3, "value", "paginator", "rows", "responsiveLayout"], [1, "flex", "justify-end", "mt-5", "pt-4", "border-t", "border-surface"], [1, "font-semibold"], [1, "ml-4", "px-4", "py-2", "bg-primary/10", "text-primary", "font-bold", "rounded-border"], [2, "width", "3rem"], [1, "text-right", "font-semibold"], [3, "value", "severity"], ["label", "Detay", "icon", "pi pi-arrow-right", "text", "", 3, "onClick"], ["colspan", "6", 1, "text-center", "p-6", "text-muted-color"], [1, "flex", "items-center", "justify-between", "gap-3"], ["icon", "pi pi-arrow-left", "label", "M\xFC\u015Fteri listesine d\xF6n", "text", "", 3, "onClick"], [1, "customer-detail-hero"], [1, "customer-avatar"], [1, "customer-hero-content"], [1, "text-muted-color", "text-sm"], [1, "flex", "flex-wrap", "items-center", "gap-3", "mt-1"], [1, "customer-hero-meta"], [1, "pi", "pi-phone"], [1, "pi", "pi-id-card"], [1, "pi", "pi-map-marker"], ["label", "Bilgileri d\xFCzenle", "icon", "pi pi-pencil", "outlined", "", 3, "onClick"], [1, "col-span-12", "xl:col-span-8"], [1, "card", "customer-financial-card"], [1, "section-heading"], [1, "pi", "pi-wallet", "text-xl", "text-primary"], [1, "grid", "grid-cols-2", "md:grid-cols-5", "gap-3", "mb-5"], [1, "customer-summary-card", "p-3", "rounded-border", "bg-orange-50", "dark:bg-orange-400/10"], [1, "block", "text-muted-color", "text-sm"], [1, "summary-value", "text-orange-500"], [1, "customer-summary-card", "p-3", "rounded-border", "bg-yellow-50", "dark:bg-yellow-400/10"], [1, "summary-value", "text-yellow-700"], [1, "customer-summary-card", "p-3", "rounded-border", "bg-surface-100", "dark:bg-surface-800"], [1, "summary-value"], [1, "customer-contact-list", "text-sm", "text-muted-color"], [1, "customer-contact-item"], [1, "pi", "pi-credit-card"], [1, "pi", "pi-calendar"], [1, "pi", "pi-file-edit"], [1, "credit-limit-box"], [1, "flex", "items-center", "justify-between", "gap-3", "mb-2"], [1, "text-sm", "text-muted-color"], [1, "credit-progress"], [1, "text-muted-color", "mt-2", "block"], [1, "col-span-12", "xl:col-span-4"], [1, "card", "h-full", "customer-repair-card"], [1, "flex", "items-center", "justify-between", "mb-4"], [1, "pi", "pi-wrench", "text-2xl", "text-primary"], [1, "customer-action-grid", "mb-5"], ["label", "Bor\xE7 hareketleri", "icon", "pi pi-book", "outlined", "", 3, "onClick"], ["label", "Bor\xE7 ekle", "icon", "pi pi-plus-circle", "severity", "warn", 3, "onClick"], ["label", "Tahsilat al", "icon", "pi pi-wallet", "severity", "success", 3, "onClick", "disabled"], [1, "border-t", "border-surface", "pt-4"], [1, "flex", "items-center", "justify-between", "mb-3"], [1, "font-semibold", "m-0"], [1, "text-muted-color", "text-sm", "mb-0"], [1, "card", "customer-note-card"], [1, "pi", "pi-info-circle", "text-xl", "text-primary"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-3"], [1, "customer-info-row"], [1, "pi", "pi-envelope"], [1, "pi", "pi-comment"], ["type", "button", 1, "text-left", "flex", "items-center", "justify-between", "gap-3", "p-3", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors"], ["type", "button", 1, "text-left", "flex", "items-center", "justify-between", "gap-3", "p-3", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "click"], [1, "block"], [1, "pi", "pi-angle-right", "ml-2", "text-muted-color"], ["label", "Vazge\xE7", "text", "", 3, "onClick"], ["label", "Kaydet", "icon", "pi pi-check", 3, "onClick"], [1, "transaction-amount"], ["colspan", "4", 1, "text-center", "p-5", "text-muted-color"], [1, "grid", "grid-cols-2", "gap-3"], [1, "p-3", "rounded-border", "bg-surface-100", "dark:bg-surface-800"], [1, "p-3", "rounded-border", "bg-yellow-50", "dark:bg-yellow-400/10"], ["for", "collectionType", 1, "block", "font-medium", "mb-2"], ["inputId", "collectionType", 1, "w-full", 3, "ngModelChange", "options", "ngModel"], ["for", "customerCollectionAmount", 1, "block", "font-medium", "mb-2"], ["inputId", "customerCollectionAmount", "mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "customerCollectionGoldGrams", 1, "block", "font-medium", "mb-2"], ["inputId", "customerCollectionGoldGrams", "suffix", " gr", 1, "w-full", 3, "ngModelChange", "ngModel", "min", "minFractionDigits", "maxFractionDigits"], ["label", "Tahsilat\u0131 kaydet", "icon", "pi pi-check", "severity", "success", 3, "onClick"], ["for", "manualDebtType", 1, "block", "font-medium", "mb-2"], ["inputId", "manualDebtType", 1, "w-full", 3, "ngModelChange", "options", "ngModel"], ["for", "manualDebtAmount", 1, "block", "font-medium", "mb-2"], ["inputId", "manualDebtAmount", "mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "manualDebtGoldGrams", 1, "block", "font-medium", "mb-2"], ["inputId", "manualDebtGoldGrams", "suffix", " gr", 1, "w-full", 3, "ngModelChange", "ngModel", "min", "minFractionDigits", "maxFractionDigits"], ["label", "Borcu kaydet", "icon", "pi pi-plus", "severity", "warn", 3, "onClick"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "grid", "grid-cols-2", "gap-3", "mb-5"], [1, "flex", "flex-wrap", "justify-between", "gap-4", "pt-4", "border-t", "border-surface"], ["label", "Bu tamirin tahsilat\u0131n\u0131 yap", "icon", "pi pi-wallet", "severity", "warn"], ["value", "Tahsil edildi", "severity", "success"], ["label", "Bu tamirin tahsilat\u0131n\u0131 yap", "icon", "pi pi-wallet", "severity", "warn", 3, "onClick"], [1, "flex", "justify-between", "p-3", "rounded-border", "bg-surface-100", "dark:bg-surface-800"], ["for", "collectionAmount", 1, "block", "font-medium", "mb-2"], ["inputId", "collectionAmount", "mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "w-full", 3, "ngModelChange", "ngModel"]], template: function Customers_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "span", 6);
      \u0275\u0275text(3, "CRM / M\xFC\u015Fteri Bilgileri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 7)(5, "div")(6, "h1", 8);
      \u0275\u0275text(7, "M\xFC\u015Fteri Bilgileri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 9);
      \u0275\u0275text(9, "\u0130leti\u015Fim ve cari hesap y\xF6netimi.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p-button", 10);
      \u0275\u0275listener("onClick", function Customers_Template_p_button_onClick_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNew());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(11, Customers_Conditional_11_Template, 21, 9, "div", 11)(12, Customers_Conditional_12_Template, 144, 56);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-dialog", 12);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(14, "div", 13)(15, "div", 14)(16, "label", 15);
      \u0275\u0275text(17, "Ad\u0131 soyad\u0131 / Firma ad\u0131 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.name, $event) || (ctx.draft.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "div", 14)(20, "label", 17);
      \u0275\u0275text(21, "E-posta");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 18);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.email, $event) || (ctx.draft.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 14)(24, "label", 19);
      \u0275\u0275text(25, "GSM telefonu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_input_ngModelChange_26_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.mobilePhone, $event) || (ctx.draft.mobilePhone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div", 14)(28, "label", 21);
      \u0275\u0275text(29, "\u0130\u015F telefonu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.workPhone, $event) || (ctx.draft.workPhone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 14)(32, "label", 23);
      \u0275\u0275text(33, "Vergi numaras\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 24);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.taxNumber, $event) || (ctx.draft.taxNumber = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 25)(36, "label", 26);
      \u0275\u0275text(37, "Adres");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "textarea", 27);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_textarea_ngModelChange_38_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.address, $event) || (ctx.draft.address = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 28)(40, "label", 29);
      \u0275\u0275text(41, "Belirlenen limit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p-inputnumber", 30);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_p_inputnumber_ngModelChange_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.creditLimit, $event) || (ctx.draft.creditLimit = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 28)(44, "label", 31);
      \u0275\u0275text(45, "Kalan taksit toplam\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "p-inputnumber", 32);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_p_inputnumber_ngModelChange_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.installmentTotal, $event) || (ctx.draft.installmentTotal = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 25)(48, "label", 33);
      \u0275\u0275text(49, "\xD6zel notlar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "textarea", 34);
      \u0275\u0275twoWayListener("ngModelChange", function Customers_Template_textarea_ngModelChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.notes, $event) || (ctx.draft.notes = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(51, Customers_ng_template_51_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p-dialog", 35);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.debtDialogVisible, $event) || (ctx.debtDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(54, "div", 36)(55, "div")(56, "span", 6);
      \u0275\u0275text(57, "Cari hesap hareketleri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "h2", 37);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 38)(61, "span", 39);
      \u0275\u0275text(62, "G\xFCncel bakiye");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "strong", 40);
      \u0275\u0275text(64);
      \u0275\u0275pipe(65, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "span", 41);
      \u0275\u0275text(67);
      \u0275\u0275pipe(68, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(69, "div", 42)(70, "div")(71, "span", 43);
      \u0275\u0275text(72, "TL borcu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "strong", 44);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div")(77, "span", 43);
      \u0275\u0275text(78, "Alt\u0131n borcu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "strong", 45);
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(82, "p-table", 46);
      \u0275\u0275template(83, Customers_ng_template_83_Template, 9, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(85, Customers_ng_template_85_Template, 11, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(87, Customers_ng_template_87_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "p-dialog", 47);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_89_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.customerCollectionDialogVisible, $event) || (ctx.customerCollectionDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(90, Customers_Conditional_90_Template, 25, 12, "div", 48);
      \u0275\u0275template(91, Customers_ng_template_91_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p-dialog", 49);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_93_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.manualDebtDialogVisible, $event) || (ctx.manualDebtDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(94, Customers_Conditional_94_Template, 25, 12, "div", 48);
      \u0275\u0275template(95, Customers_ng_template_95_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p-dialog", 50);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_97_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.repairDialogVisible, $event) || (ctx.repairDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(98, Customers_Conditional_98_Template, 33, 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "p-dialog", 51);
      \u0275\u0275twoWayListener("visibleChange", function Customers_Template_p_dialog_visibleChange_99_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.collectionDialogVisible, $event) || (ctx.collectionDialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275conditionalCreate(100, Customers_Conditional_100_Template, 16, 7, "div", 48);
      \u0275\u0275template(101, Customers_ng_template_101_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275conditional(!ctx.selectedCustomer ? 11 : 12);
      \u0275\u0275advance(2);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(64, _c04));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("header", ctx.editingId === null ? "M\xFC\u015Fteri ekle" : "M\xFC\u015Fteri bilgilerini d\xFCzenle");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.mobilePhone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.workPhone);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.taxNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.address);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.creditLimit);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.installmentTotal);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.notes);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(65, _c13));
      \u0275\u0275twoWayProperty("visible", ctx.debtDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.selectedCustomer == null ? null : ctx.selectedCustomer.name);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(65, 52, ctx.selectedCustomer == null ? null : ctx.selectedCustomer.debt, "1.2-2"), " TL");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(68, 55, ctx.selectedCustomer == null ? null : ctx.selectedCustomer.goldDebtGrams, "1.3-3"), " gr alt\u0131n");
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(75, 58, ctx.selectedCustomer == null ? null : ctx.selectedCustomer.debt, "1.2-2"), " TL");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(81, 61, ctx.selectedCustomer == null ? null : ctx.selectedCustomer.goldDebtGrams, "1.3-3"), " gr");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.selectedDebtTransactions)("responsiveLayout", "scroll");
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(66, _c22));
      \u0275\u0275twoWayProperty("visible", ctx.customerCollectionDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedCustomer ? 90 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(67, _c22));
      \u0275\u0275twoWayProperty("visible", ctx.manualDebtDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedCustomer ? 94 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(68, _c3));
      \u0275\u0275twoWayProperty("visible", ctx.repairDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedRepair ? 98 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(69, _c4));
      \u0275\u0275twoWayProperty("visible", ctx.collectionDialogVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selectedRepair ? 100 : -1);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, DialogModule, Dialog, InputNumberModule, InputNumber, InputTextModule, InputText, SelectModule, Select, TableModule, Table, TagModule, Tag, TextareaModule, Textarea, DecimalPipe], styles: ["\n\n.customer-summary-card[_ngcontent-%COMP%] {\n  min-height: 5.5rem;\n  border: 1px solid color-mix(in srgb, var(--surface-border) 75%, transparent);\n}\n.customer-detail-hero[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 10%, var(--surface-card)),\n      var(--surface-card));\n}\n.customer-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 3.5rem;\n  place-items: center;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-size: 1.35rem;\n  font-weight: 700;\n}\n.customer-hero-content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.customer-hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1.25rem;\n  margin-top: 0.7rem;\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n}\n.customer-hero-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.customer-hero-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.customer-info-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-color);\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.credit-limit-box[_ngcontent-%COMP%] {\n  padding: 0.9rem 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.credit-progress[_ngcontent-%COMP%] {\n  height: 0.5rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--surface-200);\n}\n.credit-progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--primary-color);\n  transition: width 0.2s ease;\n}\n.customer-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  min-width: 0;\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.customer-info-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  overflow-wrap: anywhere;\n  font-weight: 500;\n}\n.customer-summary-card[_ngcontent-%COMP%]   .summary-value[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.35rem;\n  font-size: 1.15rem;\n  line-height: 1.2;\n}\n.customer-contact-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.customer-contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  min-width: 0;\n  padding: 0.75rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.customer-contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n.customer-contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.customer-action-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.customer-action-grid[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.customer-action-grid[_ngcontent-%COMP%]     .p-button {\n  width: 100%;\n  justify-content: center;\n}\n.debt-dialog-summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.debt-dialog-summary[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.transaction-amount[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.2rem;\n}\n@media (max-width: 768px) {\n  .customer-detail-hero[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .customer-detail-hero[_ngcontent-%COMP%]   p-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .customer-detail-hero[_ngcontent-%COMP%]     .p-button {\n    width: 100%;\n    justify-content: center;\n  }\n  .customer-contact-list[_ngcontent-%COMP%], \n   .customer-action-grid[_ngcontent-%COMP%], \n   .debt-dialog-summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customers.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Customers, [{
    type: Component,
    args: [{ selector: "app-customers", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, SelectModule, TableModule, TagModule, TextareaModule], template: `<div class="compact-list-page flex flex-col gap-4">
    <div class="flex flex-col gap-2">
        <span class="text-muted-color">CRM / M\xFC\u015Fteri Bilgileri</span>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1 class="text-2xl font-semibold m-0">M\xFC\u015Fteri Bilgileri</h1>
                <p class="text-muted-color mt-1 mb-0">\u0130leti\u015Fim ve cari hesap y\xF6netimi.</p>
            </div>
            <p-button label="M\xFC\u015Fteri ekle" icon="pi pi-plus" (onClick)="openNew()" />
        </div>
    </div>
    @if (!selectedCustomer) {
    <div class="card">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
                <span class="text-muted-color">M\xFC\u015Fteri listesi</span>
                <h2 class="text-xl font-semibold mt-1 mb-0">{{ filteredCustomers.length }} kay\u0131t</h2>
            </div>
            <input pInputText type="text" placeholder="M\xFC\u015Fteri ara..." class="w-full md:w-72" (input)="filter($event)" />
        </div>
        <p-table [value]="filteredCustomers" [paginator]="true" [rows]="8" [responsiveLayout]="'scroll'" dataKey="id">
            <ng-template #header
                ><tr>
                    <th style="width: 3rem">#</th>
                    <th>M\xFC\u015Fterinin ad\u0131</th>
                    <th>Telefon</th>
                    <th class="text-right">Bor\xE7</th>
                    <th>Durum</th>
                    <th></th></tr
            ></ng-template>
            <ng-template #body let-customer let-rowIndex="rowIndex"
                ><tr>
                    <td>{{ rowIndex + 1 }}</td>
                    <td><span class="font-semibold">{{ customer.name }}</span></td>
                    <td>{{ customer.mobilePhone || customer.workPhone || '-' }}</td>
                    <td class="text-right font-semibold">{{ customer.debt | number: '1.2-2' }} TL</td>
                    <td><p-tag [value]="customer.status" [severity]="customer.status === 'Aktif' ? 'success' : 'secondary'" /></td>
                    <td><p-button label="Detay" icon="pi pi-arrow-right" text (onClick)="selectCustomer(customer)" /></td></tr
            ></ng-template>
            <ng-template #emptymessage
                ><tr>
                    <td colspan="6" class="text-center p-6 text-muted-color">M\xFC\u015Fteri bulunamad\u0131.</td>
                </tr></ng-template
            >
        </p-table>
        <div class="flex justify-end mt-5 pt-4 border-t border-surface">
            <span class="font-semibold">T\xFCm m\xFC\u015Fterilerin veresiye toplam\u0131</span><span class="ml-4 px-4 py-2 bg-primary/10 text-primary font-bold rounded-border">{{ totalDebt | number: '1.2-2' }} TL</span>
        </div>
    </div>
    } @else {
    <div class="flex items-center justify-between gap-3">
        <p-button icon="pi pi-arrow-left" label="M\xFC\u015Fteri listesine d\xF6n" text (onClick)="backToList()" />
        <p-tag [value]="selectedDebtStatus" [severity]="selectedCustomer.debt > 0 || selectedCustomer.goldDebtGrams > 0 ? 'warn' : 'success'" />
    </div>
    <div class="customer-detail-hero">
        <div class="customer-avatar">{{ selectedCustomer.name.charAt(0) }}</div>
        <div class="customer-hero-content">
            <span class="text-muted-color text-sm">M\xFC\u015Fteri detay kart\u0131</span>
            <div class="flex flex-wrap items-center gap-3 mt-1">
                <h1 class="text-2xl font-semibold m-0">{{ selectedCustomer.name }}</h1>
                <p-tag [value]="selectedCustomer.status" [severity]="selectedCustomer.status === 'Aktif' ? 'success' : 'secondary'" />
            </div>
            <div class="customer-hero-meta">
                <span><i class="pi pi-phone"></i>{{ selectedCustomer.mobilePhone || selectedCustomer.workPhone || 'Telefon yok' }}</span>
                <span><i class="pi pi-id-card"></i>{{ selectedCustomer.taxNumber || 'Vergi numaras\u0131 yok' }}</span>
                <span><i class="pi pi-map-marker"></i>{{ selectedCustomer.address || 'Adres yok' }}</span>
            </div>
        </div>
        <p-button label="Bilgileri d\xFCzenle" icon="pi pi-pencil" outlined (onClick)="edit(selectedCustomer)" />
    </div>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 xl:col-span-8">
            <div class="card customer-financial-card">
                <div class="section-heading">
                    <div>
                        <span class="text-muted-color">Cari hesap</span>
                        <h2 class="text-xl font-semibold mt-1 mb-0">Finansal \xF6zet</h2>
                    </div>
                    <i class="pi pi-wallet text-xl text-primary"></i>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mb-5">
                    <div class="customer-summary-card p-3 rounded-border bg-orange-50 dark:bg-orange-400/10"><span class="block text-muted-color text-sm">TL borcu</span><strong class="summary-value text-orange-500">{{ selectedCustomer.debt | number: '1.2-2' }} TL</strong></div>
                    <div class="customer-summary-card p-3 rounded-border bg-yellow-50 dark:bg-yellow-400/10">
                        <span class="block text-muted-color text-sm">Alt\u0131n borcu</span><strong class="summary-value text-yellow-700">{{ selectedCustomer.goldDebtGrams | number: '1.3-3' }} gr</strong>
                    </div>
                    <div class="customer-summary-card p-3 rounded-border bg-surface-100 dark:bg-surface-800"><span class="block text-muted-color text-sm">Kalan taksit</span><strong class="summary-value">{{ selectedCustomer.installmentTotal | number: '1.2-2' }} TL</strong></div>
                    <div class="customer-summary-card p-3 rounded-border bg-orange-50 dark:bg-orange-400/10"><span class="block text-muted-color text-sm">\u0130\u015F\xE7ilik toplam\u0131</span><strong class="summary-value">{{ selectedLaborTotal | number: '1.2-2' }} TL</strong></div>
                    <div class="customer-summary-card p-3 rounded-border bg-yellow-50 dark:bg-yellow-400/10"><span class="block text-muted-color text-sm">Maden toplam\u0131</span><strong class="summary-value">{{ selectedMetalTotal | number: '1.3-3' }} gr</strong></div>
                </div>
                <div class="customer-contact-list text-sm text-muted-color">
                    <div class="customer-contact-item"><i class="pi pi-credit-card"></i><span>{{ selectedCustomer.creditLimit | number: '1.2-2' }} TL kredi limiti</span></div>
                    <div class="customer-contact-item"><i class="pi pi-calendar"></i><span>{{ selectedRepairs.length }} tamir kayd\u0131</span></div>
                    <div class="customer-contact-item"><i class="pi pi-file-edit"></i><span>{{ selectedCustomer.notes || '\xD6zel not bulunmuyor' }}</span></div>
                </div>
                <div class="credit-limit-box">
                    <div class="flex items-center justify-between gap-3 mb-2"><span class="text-sm text-muted-color">Kredi limiti kullan\u0131m\u0131</span><strong>{{ selectedCustomer.debt | number: '1.2-2' }} / {{ selectedCustomer.creditLimit | number: '1.2-2' }} TL</strong></div>
                    <div class="credit-progress"><span [style.width.%]="selectedCreditUsagePercent"></span></div>
                    <small class="text-muted-color mt-2 block">{{ selectedCreditUsagePercent | number: '1.0-0' }}% kullan\u0131m</small>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-4">
            <div class="card h-full customer-repair-card">
                <div class="flex items-center justify-between mb-4">
                    <div>
                        <span class="text-muted-color">Tamir ge\xE7mi\u015Fi</span>
                        <h2 class="text-xl font-semibold mt-1 mb-0">{{ selectedRepairs.length }} i\u015Flem</h2>
                    </div>
                    <i class="pi pi-wrench text-2xl text-primary"></i>
                </div>
                <div class="customer-action-grid mb-5">
                    <p-button label="Bor\xE7 hareketleri" icon="pi pi-book" outlined (onClick)="openDebtDetails()" /><p-button label="Bor\xE7 ekle" icon="pi pi-plus-circle" severity="warn" (onClick)="openManualDebt()" /><p-button
                        label="Tahsilat al"
                        icon="pi pi-wallet"
                        severity="success"
                        (onClick)="openCustomerCollection()"
                        [disabled]="selectedCustomer.debt <= 0 && selectedCustomer.goldDebtGrams <= 0"
                    />
                </div>
                <div class="border-t border-surface pt-4">
                    <div class="flex items-center justify-between mb-3">
                        <h3 class="font-semibold m-0">\xD6nceki tamir i\u015Flemleri</h3>
                        <span class="text-muted-color text-sm">{{ selectedRepairs.length }} kay\u0131t</span>
                    </div>
                    @if (selectedRepairs.length) {
                    <div class="flex flex-col gap-2">
                        @for (repair of selectedRepairs; track repair.id) {<button
                            type="button"
                            class="text-left flex items-center justify-between gap-3 p-3 rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors"
                            (click)="openRepairDetails(repair)"
                        >
                            <span><strong class="block">{{ repair.product }}</strong><small class="text-muted-color">{{ repair.date }} \xB7 TMR-{{ repair.id }}</small></span
                            ><span class="text-right"><p-tag [value]="repair.status" [severity]="repair.status === 'Tamamland\u0131' ? 'success' : 'warn'" /><i class="pi pi-angle-right ml-2 text-muted-color"></i></span></button
                        >}
                    </div>
                    } @else {
                    <p class="text-muted-color text-sm mb-0">Bu m\xFC\u015Fteriye ait tamamlanm\u0131\u015F veya devam eden tamir bulunmuyor.</p>
                    }
                </div>
            </div>
        </div>
        <div class="col-span-12">
            <div class="card customer-note-card">
                <div class="section-heading">
                    <div>
                        <span class="text-muted-color">M\xFC\u015Fteri ileti\u015Fimi</span>
                        <h2 class="text-xl font-semibold mt-1 mb-0">\u0130leti\u015Fim ve notlar</h2>
                    </div>
                    <i class="pi pi-info-circle text-xl text-primary"></i>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div class="customer-info-row"><i class="pi pi-envelope"></i><div><span class="block text-xs text-muted-color">E-posta</span><strong>{{ selectedCustomer.email || 'Bilgi yok' }}</strong></div></div>
                    <div class="customer-info-row"><i class="pi pi-map-marker"></i><div><span class="block text-xs text-muted-color">Adres</span><strong>{{ selectedCustomer.address || 'Bilgi yok' }}</strong></div></div>
                    <div class="customer-info-row"><i class="pi pi-comment"></i><div><span class="block text-xs text-muted-color">\xD6zel not</span><strong>{{ selectedCustomer.notes || 'Not eklenmemi\u015F' }}</strong></div></div>
                </div>
            </div>
        </div>
    </div>
    }
</div>

<p-dialog [(visible)]="dialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(58rem, 95vw)' }" [header]="editingId === null ? 'M\xFC\u015Fteri ekle' : 'M\xFC\u015Fteri bilgilerini d\xFCzenle'">
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6"><label for="name" class="block font-medium mb-2">Ad\u0131 soyad\u0131 / Firma ad\u0131 *</label><input id="name" pInputText class="w-full" [(ngModel)]="draft.name" /></div>
        <div class="col-span-12 md:col-span-6"><label for="email" class="block font-medium mb-2">E-posta</label><input id="email" pInputText class="w-full" [(ngModel)]="draft.email" /></div>
        <div class="col-span-12 md:col-span-6"><label for="mobilePhone" class="block font-medium mb-2">GSM telefonu</label><input id="mobilePhone" pInputText class="w-full" [(ngModel)]="draft.mobilePhone" /></div>
        <div class="col-span-12 md:col-span-6"><label for="workPhone" class="block font-medium mb-2">\u0130\u015F telefonu</label><input id="workPhone" pInputText class="w-full" [(ngModel)]="draft.workPhone" /></div>
        <div class="col-span-12 md:col-span-6"><label for="taxNumber" class="block font-medium mb-2">Vergi numaras\u0131</label><input id="taxNumber" pInputText class="w-full" [(ngModel)]="draft.taxNumber" /></div>
        <div class="col-span-12"><label for="address" class="block font-medium mb-2">Adres</label><textarea id="address" pTextarea class="w-full" rows="2" [(ngModel)]="draft.address"></textarea></div>
        <div class="col-span-12 md:col-span-4">
            <label for="creditLimit" class="block font-medium mb-2">Belirlenen limit</label><p-inputnumber inputId="creditLimit" class="w-full" [(ngModel)]="draft.creditLimit" mode="currency" currency="TRY" locale="tr-TR" />
        </div>
        <div class="col-span-12 md:col-span-4">
            <label for="installmentTotal" class="block font-medium mb-2">Kalan taksit toplam\u0131</label><p-inputnumber inputId="installmentTotal" class="w-full" [(ngModel)]="draft.installmentTotal" mode="currency" currency="TRY" locale="tr-TR" />
        </div>
        <div class="col-span-12"><label for="notes" class="block font-medium mb-2">\xD6zel notlar</label><textarea id="notes" pTextarea class="w-full" rows="3" [(ngModel)]="draft.notes"></textarea></div>
    </div>
    <ng-template #footer><p-button label="Vazge\xE7" text (onClick)="dialogVisible = false" /><p-button label="Kaydet" icon="pi pi-check" (onClick)="save()" /></ng-template>
</p-dialog>
<p-dialog [(visible)]="debtDialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(52rem, 95vw)' }" header="Bor\xE7 detay\u0131">
    <div class="flex items-center justify-between gap-4 mb-4">
        <div>
            <span class="text-muted-color">Cari hesap hareketleri</span>
            <h2 class="text-xl font-semibold mt-1 mb-0">{{ selectedCustomer?.name }}</h2>
        </div>
        <div class="text-right">
            <span class="block text-xs text-muted-color">G\xFCncel bakiye</span><strong class="block text-xl text-orange-500">{{ selectedCustomer?.debt | number: '1.2-2' }} TL</strong><span class="text-sm text-yellow-700">{{ selectedCustomer?.goldDebtGrams | number: '1.3-3' }} gr alt\u0131n</span>
        </div>
    </div>
    <div class="debt-dialog-summary">
        <div><span class="block text-sm text-muted-color">TL borcu</span><strong class="text-orange-500">{{ selectedCustomer?.debt | number: '1.2-2' }} TL</strong></div>
        <div><span class="block text-sm text-muted-color">Alt\u0131n borcu</span><strong class="text-yellow-700">{{ selectedCustomer?.goldDebtGrams | number: '1.3-3' }} gr</strong></div>
    </div>
    <p-table [value]="selectedDebtTransactions" [responsiveLayout]="'scroll'"
        ><ng-template #header
            ><tr>
                <th>Tarih</th>
                <th>A\xE7\u0131klama</th>
                <th>\u0130\u015Flem</th>
                <th class="text-right">Tutar</th>
            </tr></ng-template
        ><ng-template #body let-transaction
            ><tr>
                <td>{{ transaction.date }}</td>
                <td>{{ transaction.description }}</td>
                <td><p-tag [value]="transaction.type" [severity]="transaction.type === 'Bor\xE7' ? 'danger' : 'success'" /></td>
                <td class="text-right font-semibold">
                    <span class="transaction-amount">
                        @if (transaction.amount) { <span>{{ transaction.amount | number: '1.2-2' }} TL</span> } @if (transaction.goldGrams) { <span class="text-yellow-700">{{ transaction.goldGrams | number: '1.3-3' }} gr alt\u0131n</span> }
                    </span>
                </td>
            </tr></ng-template
        ><ng-template #emptymessage
            ><tr>
                <td colspan="4" class="text-center p-5 text-muted-color">Bor\xE7 hareketi bulunmuyor.</td>
            </tr></ng-template
        ></p-table
    >
</p-dialog>
<p-dialog [(visible)]="customerCollectionDialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(34rem, 95vw)' }" header="M\xFC\u015Fteri tahsilat\u0131">
    @if (selectedCustomer) {
    <div class="flex flex-col gap-4">
        <div>
            <span class="text-muted-color">Tahsilat yap\u0131lacak m\xFC\u015Fteri</span>
            <h3 class="text-xl font-semibold mt-1 mb-0">{{ selectedCustomer.name }}</h3>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <div class="p-3 rounded-border bg-surface-100 dark:bg-surface-800"><span class="block text-sm text-muted-color">TL borcu</span><strong>{{ selectedCustomer.debt | number: '1.2-2' }} TL</strong></div>
            <div class="p-3 rounded-border bg-yellow-50 dark:bg-yellow-400/10"><span class="block text-sm text-muted-color">Alt\u0131n borcu</span><strong>{{ selectedCustomer.goldDebtGrams | number: '1.3-3' }} gr</strong></div>
        </div>
        <div><label class="block font-medium mb-2" for="collectionType">Tahsilat t\xFCr\xFC</label><p-select inputId="collectionType" class="w-full" [options]="collectionTypes" [(ngModel)]="customerCollectionType" /></div>
        @if (customerCollectionType === 'Nakit') {
        <div>
            <label class="block font-medium mb-2" for="customerCollectionAmount">Nakit tahsilat tutar\u0131</label
            ><p-inputnumber inputId="customerCollectionAmount" class="w-full" [(ngModel)]="customerCollectionAmount" mode="currency" currency="TRY" locale="tr-TR" />
        </div>
        } @else {
        <div>
            <label class="block font-medium mb-2" for="customerCollectionGoldGrams">Tahsil edilen alt\u0131n</label
            ><p-inputnumber inputId="customerCollectionGoldGrams" class="w-full" [(ngModel)]="customerCollectionGoldGrams" [min]="0.001" [minFractionDigits]="3" [maxFractionDigits]="3" suffix=" gr" />
        </div>
        }
    </div>
    }
    <ng-template #footer><p-button label="Vazge\xE7" text (onClick)="customerCollectionDialogVisible = false" /><p-button label="Tahsilat\u0131 kaydet" icon="pi pi-check" severity="success" (onClick)="collectCustomerDebt()" /></ng-template>
</p-dialog>
<p-dialog [(visible)]="manualDebtDialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(34rem, 95vw)' }" header="Manuel bor\xE7 ekle">
    @if (selectedCustomer) {
    <div class="flex flex-col gap-4">
        <div>
            <span class="text-muted-color">Bor\xE7 eklenecek m\xFC\u015Fteri</span>
            <h3 class="text-xl font-semibold mt-1 mb-0">{{ selectedCustomer.name }}</h3>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <div class="p-3 rounded-border bg-surface-100 dark:bg-surface-800"><span class="block text-sm text-muted-color">Mevcut TL borcu</span><strong>{{ selectedCustomer.debt | number: '1.2-2' }} TL</strong></div>
            <div class="p-3 rounded-border bg-yellow-50 dark:bg-yellow-400/10"><span class="block text-sm text-muted-color">Mevcut alt\u0131n borcu</span><strong>{{ selectedCustomer.goldDebtGrams | number: '1.3-3' }} gr</strong></div>
        </div>
        <div><label class="block font-medium mb-2" for="manualDebtType">Bor\xE7 t\xFCr\xFC</label><p-select inputId="manualDebtType" class="w-full" [options]="collectionTypes" [(ngModel)]="manualDebtType" /></div>
        @if (manualDebtType === 'Nakit') {
        <div><label class="block font-medium mb-2" for="manualDebtAmount">Eklenecek TL borcu</label><p-inputnumber inputId="manualDebtAmount" class="w-full" [(ngModel)]="manualDebtAmount" mode="currency" currency="TRY" locale="tr-TR" /></div>
        } @else {
        <div>
            <label class="block font-medium mb-2" for="manualDebtGoldGrams">Eklenecek alt\u0131n</label
            ><p-inputnumber inputId="manualDebtGoldGrams" class="w-full" [(ngModel)]="manualDebtGoldGrams" [min]="0.001" [minFractionDigits]="3" [maxFractionDigits]="3" suffix=" gr" />
        </div>
        }
    </div>
    }
    <ng-template #footer><p-button label="Vazge\xE7" text (onClick)="manualDebtDialogVisible = false" /><p-button label="Borcu kaydet" icon="pi pi-plus" severity="warn" (onClick)="addManualDebt()" /></ng-template>
</p-dialog>
<p-dialog [(visible)]="repairDialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(48rem, 95vw)' }" header="Tamir detay\u0131">
    @if (selectedRepair) {
    <div class="flex items-center justify-between mb-5">
        <div>
            <span class="text-muted-color">TMR-{{ selectedRepair.id }}</span>
            <h2 class="text-xl font-semibold mt-1 mb-0">{{ selectedRepair.product }}</h2>
            <small class="text-muted-color">{{ selectedRepair.date }}</small>
        </div>
        <p-tag [value]="selectedRepair.status" [severity]="selectedRepair.status === 'Tamamland\u0131' ? 'success' : 'warn'" />
    </div>
    <div class="grid grid-cols-2 gap-3 mb-5">
        <div class="p-3 rounded-border bg-surface-100 dark:bg-surface-800"><span class="block text-muted-color text-sm">Yap\u0131lan i\u015F\xE7ilikler</span><strong>{{ selectedRepair.labors }}</strong></div>
        <div class="p-3 rounded-border bg-surface-100 dark:bg-surface-800"><span class="block text-muted-color text-sm">K\u0131ymetli madenler</span><strong>{{ selectedRepair.metals || '-' }}</strong></div>
    </div>
    <div class="flex flex-wrap justify-between gap-4 pt-4 border-t border-surface">
        <span>\u0130\u015F\xE7ilik: <strong>{{ selectedRepair.laborTotal | number: '1.2-2' }} TL</strong></span
        ><span>Maden: <strong>{{ selectedRepair.metalTotal | number: '1.3-3' }} gr</strong></span
        >@if (selectedRepair.status === 'Tamamland\u0131' && selectedRepair.collected < selectedRepair.laborTotal) {<p-button label="Bu tamirin tahsilat\u0131n\u0131 yap" icon="pi pi-wallet" severity="warn" (onClick)="openCollection(selectedRepair)" />} @else if
        (selectedRepair.status === 'Tamamland\u0131') {<p-tag value="Tahsil edildi" severity="success" />}
    </div>
    }
</p-dialog>
<p-dialog [(visible)]="collectionDialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(32rem, 95vw)' }" header="Tamir tahsilat\u0131">
    @if (selectedRepair) {
    <div class="flex flex-col gap-4">
        <div>
            <span class="text-muted-color">Tahsil edilecek i\u015Flem</span>
            <h3 class="text-xl font-semibold mt-1 mb-0">{{ selectedRepair.product }} \xB7 TMR-{{ selectedRepair.id }}</h3>
        </div>
        <div class="flex justify-between p-3 rounded-border bg-surface-100 dark:bg-surface-800"><span>Kalan tutar</span><strong>{{ selectedRepair.laborTotal - selectedRepair.collected | number: '1.2-2' }} TL</strong></div>
        <div><label for="collectionAmount" class="block font-medium mb-2">Tahsilat tutar\u0131</label><p-inputnumber inputId="collectionAmount" class="w-full" [(ngModel)]="collectionAmount" mode="currency" currency="TRY" locale="tr-TR" /></div>
    </div>
    }
    <ng-template #footer><p-button label="Vazge\xE7" text (onClick)="collectionDialogVisible = false" /><p-button label="Tahsilat\u0131 kaydet" icon="pi pi-check" severity="success" (onClick)="collectRepair()" /></ng-template>
</p-dialog>
`, styles: ["/* src/app/pages/crm/customers.scss */\n.customer-summary-card {\n  min-height: 5.5rem;\n  border: 1px solid color-mix(in srgb, var(--surface-border) 75%, transparent);\n}\n.customer-detail-hero {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1.25rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background:\n    linear-gradient(\n      135deg,\n      color-mix(in srgb, var(--primary-color) 10%, var(--surface-card)),\n      var(--surface-card));\n}\n.customer-avatar {\n  display: grid;\n  flex: 0 0 3.5rem;\n  place-items: center;\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: var(--primary-color);\n  color: var(--primary-contrast-color);\n  font-size: 1.35rem;\n  font-weight: 700;\n}\n.customer-hero-content {\n  flex: 1;\n  min-width: 0;\n}\n.customer-hero-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1.25rem;\n  margin-top: 0.7rem;\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n}\n.customer-hero-meta span {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.customer-hero-meta i,\n.customer-info-row i {\n  color: var(--primary-color);\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.credit-limit-box {\n  padding: 0.9rem 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.credit-progress {\n  height: 0.5rem;\n  overflow: hidden;\n  border-radius: 999px;\n  background: var(--surface-200);\n}\n.credit-progress span {\n  display: block;\n  height: 100%;\n  border-radius: inherit;\n  background: var(--primary-color);\n  transition: width 0.2s ease;\n}\n.customer-info-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  min-width: 0;\n  padding: 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.customer-info-row strong {\n  display: block;\n  overflow-wrap: anywhere;\n  font-weight: 500;\n}\n.customer-summary-card .summary-value {\n  display: block;\n  margin-top: 0.35rem;\n  font-size: 1.15rem;\n  line-height: 1.2;\n}\n.customer-contact-list {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.customer-contact-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.65rem;\n  min-width: 0;\n  padding: 0.75rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.customer-contact-item i {\n  margin-top: 0.15rem;\n  color: var(--primary-color);\n}\n.customer-contact-item span {\n  overflow-wrap: anywhere;\n}\n.customer-action-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 0.75rem;\n}\n.customer-action-grid p-button {\n  width: 100%;\n}\n.customer-action-grid ::ng-deep .p-button {\n  width: 100%;\n  justify-content: center;\n}\n.debt-dialog-summary {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.debt-dialog-summary > div {\n  padding: 0.85rem 1rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--content-border-radius);\n  background: var(--surface-ground);\n}\n.transaction-amount {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.2rem;\n}\n@media (max-width: 768px) {\n  .customer-detail-hero {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .customer-detail-hero p-button {\n    width: 100%;\n  }\n  .customer-detail-hero ::ng-deep .p-button {\n    width: 100%;\n    justify-content: center;\n  }\n  .customer-contact-list,\n  .customer-action-grid,\n  .debt-dialog-summary {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=customers.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Customers, { className: "Customers", filePath: "src/app/pages/crm/customers.ts", lineNumber: 55 });
})();

// src/app/pages/crm/users.ts
var _c05 = () => ({ width: "min(52rem, 95vw)" });
function Users_ng_template_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Kullan\u0131c\u0131");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "G\xF6rev");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "Rol");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "\u0130leti\u015Fim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "Yetkiler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 41);
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 40)(3, "span", 42);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "span", 43);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "small", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275element(13, "p-tag", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td")(17, "span", 45);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td")(22, "p-button", 46);
    \u0275\u0275listener("onClick", function Users_ng_template_46_Template_p_button_onClick_22_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.edit(user_r3));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "p-button", 47);
    \u0275\u0275listener("onClick", function Users_ng_template_46_Template_p_button_onClick_23_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.remove(user_r3));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.initials(user_r3.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.task);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r3.role)("severity", user_r3.role === "Y\xF6netici" ? "warn" : "info");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r3.phone || "-");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", user_r3.permissions.length, " yetki");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r3.status)("severity", user_r3.status === "Aktif" ? "success" : "secondary");
  }
}
function Users_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 48);
    \u0275\u0275text(2, "Kullan\u0131c\u0131 bulunamad\u0131.");
    \u0275\u0275elementEnd()();
  }
}
function Users_For_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p-checkbox", 49);
    \u0275\u0275twoWayListener("ngModelChange", function Users_For_81_Template_p_checkbox_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.draft.permissions, $event) || (ctx_r3.draft.permissions = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "label", 50);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const permission_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("inputId", permission_r6)("value", permission_r6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.draft.permissions);
    \u0275\u0275advance();
    \u0275\u0275property("for", permission_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(permission_r6);
  }
}
function Users_ng_template_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 51);
    \u0275\u0275listener("onClick", function Users_ng_template_82_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.dialogVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 52);
    \u0275\u0275listener("onClick", function Users_ng_template_82_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.save());
    });
    \u0275\u0275elementEnd();
  }
}
var Users = class _Users {
  users = [
    { id: 1, name: "Demo Kullan\u0131c\u0131", email: "demo@crm.local", role: "Y\xF6netici", task: "Ma\u011Faza M\xFCd\xFCr\xFC", phone: "0532 111 22 33", status: "Aktif", permissions: ["M\xFC\u015Fteri y\xF6netimi", "Tamir y\xF6netimi", "\u0130\u015F\xE7ilik tan\u0131mlar\u0131", "Raporlar"] },
    { id: 2, name: "Ay\u015Fe Karaca", email: "ayse@crm.local", role: "Sat\u0131\u015F Uzman\u0131", task: "Sat\u0131\u015F Dan\u0131\u015Fman\u0131", phone: "0542 222 33 44", status: "Aktif", permissions: ["M\xFC\u015Fteri y\xF6netimi", "Tamir ba\u015Flatma"] },
    { id: 3, name: "Mehmet Can", email: "mehmet@crm.local", role: "G\xF6r\xFCnt\xFCleyici", task: "Stok Sorumlusu", phone: "0551 333 44 55", status: "Pasif", permissions: ["Raporlar"] },
    { id: 4, name: "Zeynep Arslan", email: "zeynep@crm.local", role: "Teknisyen", task: "Tak\u0131 Ustas\u0131", phone: "0533 444 55 66", status: "Aktif", permissions: ["Tamir ba\u015Flatma", "Tamir tamamlama"] }
  ];
  filteredUsers = [...this.users];
  roles = ["Y\xF6netici", "Sat\u0131\u015F Uzman\u0131", "Teknisyen", "G\xF6r\xFCnt\xFCleyici"];
  tasks = ["Ma\u011Faza M\xFCd\xFCr\xFC", "Sat\u0131\u015F Dan\u0131\u015Fman\u0131", "Tak\u0131 Ustas\u0131", "Stok Sorumlusu", "Kasa Sorumlusu", "Muhasebe Sorumlusu"];
  statuses = ["Aktif", "Pasif"];
  availablePermissions = ["M\xFC\u015Fteri y\xF6netimi", "Kullan\u0131c\u0131 y\xF6netimi", "Tamir ba\u015Flatma", "Tamir tamamlama", "\u0130\u015F\xE7ilik tan\u0131mlar\u0131", "Raporlar"];
  dialogVisible = false;
  editingId = null;
  draft = this.emptyUser();
  get activeCount() {
    return this.users.filter((user) => user.status === "Aktif").length;
  }
  get adminCount() {
    return this.users.filter((user) => user.role === "Y\xF6netici").length;
  }
  filter(event) {
    const value = event.target.value.toLocaleLowerCase("tr-TR");
    this.filteredUsers = this.users.filter((user) => `${user.name} ${user.email} ${user.role} ${user.task}`.toLocaleLowerCase("tr-TR").includes(value));
  }
  initials(name) {
    return name.split(" ").map((part) => part[0]).join("").slice(0, 2);
  }
  openNew() {
    this.editingId = null;
    this.draft = this.emptyUser();
    this.dialogVisible = true;
  }
  edit(user) {
    this.editingId = user.id;
    this.draft = __spreadProps(__spreadValues({}, user), { permissions: [...user.permissions] });
    this.dialogVisible = true;
  }
  save() {
    if (!this.draft.name.trim() || !this.draft.email.trim() || !this.draft.task.trim())
      return;
    if (this.editingId === null)
      this.users = [...this.users, __spreadProps(__spreadValues({}, this.draft), { id: Date.now() })];
    else
      this.users = this.users.map((user) => user.id === this.editingId ? __spreadProps(__spreadValues({}, this.draft), { id: this.editingId }) : user);
    this.filteredUsers = [...this.users];
    this.dialogVisible = false;
  }
  remove(user) {
    this.users = this.users.filter((item) => item.id !== user.id);
    this.filteredUsers = this.filteredUsers.filter((item) => item.id !== user.id);
  }
  emptyUser() {
    return { id: 0, name: "", email: "", role: "G\xF6r\xFCnt\xFCleyici", task: "Sat\u0131\u015F Dan\u0131\u015Fman\u0131", phone: "", status: "Aktif", permissions: [] };
  }
  static \u0275fac = function Users_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Users)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Users, selectors: [["app-users"]], decls: 84, vars: 24, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], [1, "compact-list-page", "flex", "flex-col", "gap-4"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "md:justify-between", "gap-4"], [1, "text-muted-color"], [1, "text-2xl", "font-semibold", "mt-1", "mb-0"], [1, "text-muted-color", "mt-1", "mb-0"], ["label", "Yeni kullan\u0131c\u0131", "icon", "pi pi-user-plus", 3, "onClick"], [1, "grid", "grid-cols-12", "gap-3"], [1, "col-span-12", "sm:col-span-4"], [1, "card"], [1, "text-3xl", "font-semibold", "mt-3"], [1, "text-primary", "text-sm"], [1, "text-green-500", "text-sm"], [1, "text-orange-500", "text-sm"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4", "mb-4"], [1, "text-xl", "font-semibold", "m-0"], [1, "text-muted-color", "text-sm"], ["pInputText", "", "placeholder", "Ad, g\xF6rev, rol veya e-posta ara...", 1, "w-full", "md:w-80", 3, "input"], [3, "value", "paginator", "rows", "responsiveLayout"], [3, "visibleChange", "visible", "modal", "draggable", "header"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "md:col-span-6"], ["for", "name", 1, "block", "font-medium", "mb-2"], ["id", "name", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "email", 1, "block", "font-medium", "mb-2"], ["id", "email", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "phone", 1, "block", "font-medium", "mb-2"], ["id", "phone", "pInputText", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "task", 1, "block", "font-medium", "mb-2"], ["inputId", "task", 1, "w-full", 3, "ngModelChange", "options", "ngModel"], ["for", "role", 1, "block", "font-medium", "mb-2"], ["inputId", "role", 1, "w-full", 3, "ngModelChange", "options", "ngModel"], ["for", "status", 1, "block", "font-medium", "mb-2"], ["inputId", "status", 1, "w-full", 3, "ngModelChange", "options", "ngModel"], [1, "col-span-12"], [1, "block", "font-medium", "mb-3"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-3"], [1, "flex", "items-center", "gap-2"], [2, "width", "8rem"], [1, "flex", "items-center", "justify-center", "rounded-full", "bg-primary", "text-primary-contrast", "w-8", "h-8", "text-xs"], [1, "font-semibold", "block"], [3, "value", "severity"], [1, "text-sm"], ["icon", "pi pi-pencil", "text", "", "rounded", "", 3, "onClick"], ["icon", "pi pi-trash", "text", "", "rounded", "", "severity", "danger", 3, "onClick"], ["colspan", "7", 1, "text-center", "p-6", "text-muted-color"], [3, "ngModelChange", "inputId", "value", "ngModel"], [3, "for"], ["label", "Vazge\xE7", "text", "", 3, "onClick"], ["label", "Kaydet", "icon", "pi pi-check", 3, "onClick"]], template: function Users_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div")(3, "span", 6);
      \u0275\u0275text(4, "CRM / Kullan\u0131c\u0131 Tan\u0131mlar\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 7);
      \u0275\u0275text(6, "Kullan\u0131c\u0131 Tan\u0131mlar\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 8);
      \u0275\u0275text(8, "Ekip, rol ve yetki y\xF6netimi.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "p-button", 9);
      \u0275\u0275listener("onClick", function Users_Template_p_button_onClick_9_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNew());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "div", 12)(13, "span", 6);
      \u0275\u0275text(14, "Toplam kullan\u0131c\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 13);
      \u0275\u0275text(16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 14);
      \u0275\u0275text(18, "Tan\u0131ml\u0131 ekip \xFCyesi");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(19, "div", 11)(20, "div", 12)(21, "span", 6);
      \u0275\u0275text(22, "Aktif kullan\u0131c\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 13);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 15);
      \u0275\u0275text(26, "Sisteme eri\u015Febilir");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "span", 6);
      \u0275\u0275text(30, "Y\xF6netici");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "div", 13);
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span", 16);
      \u0275\u0275text(34, "Geni\u015F yetkili kullan\u0131c\u0131");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(35, "div", 12)(36, "div", 17)(37, "div")(38, "h2", 18);
      \u0275\u0275text(39, "Sistem kullan\u0131c\u0131lar\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 19);
      \u0275\u0275text(41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "input", 20);
      \u0275\u0275listener("input", function Users_Template_input_input_42_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "p-table", 21);
      \u0275\u0275template(44, Users_ng_template_44_Template, 14, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(46, Users_ng_template_46_Template, 24, 10, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(48, Users_ng_template_48_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "p-dialog", 22);
      \u0275\u0275twoWayListener("visibleChange", function Users_Template_p_dialog_visibleChange_50_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(51, "div", 23)(52, "div", 24)(53, "label", 25);
      \u0275\u0275text(54, "Ad soyad *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_input_ngModelChange_55_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.name, $event) || (ctx.draft.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 24)(57, "label", 27);
      \u0275\u0275text(58, "E-posta *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 28);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_input_ngModelChange_59_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.email, $event) || (ctx.draft.email = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "div", 24)(61, "label", 29);
      \u0275\u0275text(62, "Telefon");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_input_ngModelChange_63_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.phone, $event) || (ctx.draft.phone = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 24)(65, "label", 31);
      \u0275\u0275text(66, "G\xF6rev / pozisyon *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "p-select", 32);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_p_select_ngModelChange_67_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.task, $event) || (ctx.draft.task = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "div", 24)(69, "label", 33);
      \u0275\u0275text(70, "Rol *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p-select", 34);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_p_select_ngModelChange_71_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.role, $event) || (ctx.draft.role = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 24)(73, "label", 35);
      \u0275\u0275text(74, "Durum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p-select", 36);
      \u0275\u0275twoWayListener("ngModelChange", function Users_Template_p_select_ngModelChange_75_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.status, $event) || (ctx.draft.status = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 37)(77, "span", 38);
      \u0275\u0275text(78, "Sistem yetkileri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "div", 39);
      \u0275\u0275repeaterCreate(80, Users_For_81_Template, 4, 5, "div", 40, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(82, Users_ng_template_82_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate(ctx.users.length);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.activeCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.adminCount);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.filteredUsers.length, " kay\u0131t listeleniyor");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.filteredUsers)("paginator", true)("rows", 8)("responsiveLayout", "scroll");
      \u0275\u0275advance(7);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c05));
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("modal", true)("draggable", false)("header", ctx.editingId === null ? "Yeni kullan\u0131c\u0131 tan\u0131mla" : "Kullan\u0131c\u0131y\u0131 d\xFCzenle");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.name);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.phone);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.tasks);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.task);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.roles);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.role);
      \u0275\u0275advance(4);
      \u0275\u0275property("options", ctx.statuses);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.status);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.availablePermissions);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, CheckboxModule, Checkbox, DialogModule, Dialog, InputTextModule, InputText, SelectModule, Select, TableModule, Table, TagModule, Tag], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Users, [{
    type: Component,
    args: [{ selector: "app-users", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, CheckboxModule, DialogModule, InputTextModule, SelectModule, TableModule, TagModule], template: `<div class="compact-list-page flex flex-col gap-4">
    <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
            <span class="text-muted-color">CRM / Kullan\u0131c\u0131 Tan\u0131mlar\u0131</span>
            <h1 class="text-2xl font-semibold mt-1 mb-0">Kullan\u0131c\u0131 Tan\u0131mlar\u0131</h1>
            <p class="text-muted-color mt-1 mb-0">Ekip, rol ve yetki y\xF6netimi.</p>
        </div>
        <p-button label="Yeni kullan\u0131c\u0131" icon="pi pi-user-plus" (onClick)="openNew()" />
    </div>

    <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 sm:col-span-4">
            <div class="card">
                <span class="text-muted-color">Toplam kullan\u0131c\u0131</span>
                <div class="text-3xl font-semibold mt-3">{{ users.length }}</div>
                <span class="text-primary text-sm">Tan\u0131ml\u0131 ekip \xFCyesi</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-4">
            <div class="card">
                <span class="text-muted-color">Aktif kullan\u0131c\u0131</span>
                <div class="text-3xl font-semibold mt-3">{{ activeCount }}</div>
                <span class="text-green-500 text-sm">Sisteme eri\u015Febilir</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-4">
            <div class="card">
                <span class="text-muted-color">Y\xF6netici</span>
                <div class="text-3xl font-semibold mt-3">{{ adminCount }}</div>
                <span class="text-orange-500 text-sm">Geni\u015F yetkili kullan\u0131c\u0131</span>
            </div>
        </div>
    </div>

    <div class="card">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
            <div>
                <h2 class="text-xl font-semibold m-0">Sistem kullan\u0131c\u0131lar\u0131</h2>
                <span class="text-muted-color text-sm">{{ filteredUsers.length }} kay\u0131t listeleniyor</span>
            </div>
            <input pInputText class="w-full md:w-80" placeholder="Ad, g\xF6rev, rol veya e-posta ara..." (input)="filter($event)" />
        </div>
        <p-table [value]="filteredUsers" [paginator]="true" [rows]="8" [responsiveLayout]="'scroll'">
            <ng-template #header
                ><tr>
                    <th>Kullan\u0131c\u0131</th>
                    <th>G\xF6rev</th>
                    <th>Rol</th>
                    <th>\u0130leti\u015Fim</th>
                    <th>Yetkiler</th>
                    <th>Durum</th>
                    <th style="width: 8rem"></th></tr
            ></ng-template>
            <ng-template #body let-user>
                <tr>
                    <td>
                        <div class="flex items-center gap-2">
                                <span class="flex items-center justify-center rounded-full bg-primary text-primary-contrast w-8 h-8 text-xs">{{ initials(user.name) }}</span>
                            <div><span class="font-semibold block">{{ user.name }}</span><small class="text-muted-color">{{ user.email }}</small></div>
                        </div>
                    </td>
                    <td>{{ user.task }}</td>
                    <td><p-tag [value]="user.role" [severity]="user.role === 'Y\xF6netici' ? 'warn' : 'info'" /></td>
                    <td>{{ user.phone || '-' }}</td>
                    <td><span class="text-sm">{{ user.permissions.length }} yetki</span></td>
                    <td><p-tag [value]="user.status" [severity]="user.status === 'Aktif' ? 'success' : 'secondary'" /></td>
                    <td><p-button icon="pi pi-pencil" text rounded (onClick)="edit(user)" /><p-button icon="pi pi-trash" text rounded severity="danger" (onClick)="remove(user)" /></td>
                </tr>
            </ng-template>
            <ng-template #emptymessage
                ><tr>
                    <td colspan="7" class="text-center p-6 text-muted-color">Kullan\u0131c\u0131 bulunamad\u0131.</td>
                </tr></ng-template
            >
        </p-table>
    </div>
</div>

<p-dialog [(visible)]="dialogVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(52rem, 95vw)' }" [header]="editingId === null ? 'Yeni kullan\u0131c\u0131 tan\u0131mla' : 'Kullan\u0131c\u0131y\u0131 d\xFCzenle'">
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 md:col-span-6"><label for="name" class="block font-medium mb-2">Ad soyad *</label><input id="name" pInputText class="w-full" [(ngModel)]="draft.name" /></div>
        <div class="col-span-12 md:col-span-6"><label for="email" class="block font-medium mb-2">E-posta *</label><input id="email" pInputText class="w-full" [(ngModel)]="draft.email" /></div>
        <div class="col-span-12 md:col-span-6"><label for="phone" class="block font-medium mb-2">Telefon</label><input id="phone" pInputText class="w-full" [(ngModel)]="draft.phone" /></div>
        <div class="col-span-12 md:col-span-6"><label for="task" class="block font-medium mb-2">G\xF6rev / pozisyon *</label><p-select inputId="task" class="w-full" [options]="tasks" [(ngModel)]="draft.task" /></div>
        <div class="col-span-12 md:col-span-6"><label for="role" class="block font-medium mb-2">Rol *</label><p-select inputId="role" class="w-full" [options]="roles" [(ngModel)]="draft.role" /></div>
        <div class="col-span-12 md:col-span-6"><label for="status" class="block font-medium mb-2">Durum</label><p-select inputId="status" class="w-full" [options]="statuses" [(ngModel)]="draft.status" /></div>
        <div class="col-span-12">
            <span class="block font-medium mb-3">Sistem yetkileri</span>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                @for (permission of availablePermissions; track permission) {
                <div class="flex items-center gap-2"><p-checkbox [inputId]="permission" [value]="permission" [(ngModel)]="draft.permissions" /><label [for]="permission">{{ permission }}</label></div>
                }
            </div>
        </div>
    </div>
    <ng-template #footer><p-button label="Vazge\xE7" text (onClick)="dialogVisible = false" /><p-button label="Kaydet" icon="pi pi-check" (onClick)="save()" /></ng-template>
</p-dialog>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Users, { className: "Users", filePath: "src/app/pages/crm/users.ts", lineNumber: 29 });
})();

// src/app/pages/jewelry/repair.ts
function Repair_For_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const customer_r2 = ctx.$implicit;
    \u0275\u0275property("value", customer_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(customer_r2 === "T\xFCm\xFC" ? "T\xFCm m\xFC\u015Fteriler" : customer_r2);
  }
}
function Repair_ng_template_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Fi\u015F No");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "M\xFC\u015Fteri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "\xDCr\xFCn");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "Ba\u015Flang\u0131\xE7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "\u0130\u015F\xE7ilik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Durum");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 31);
    \u0275\u0275elementEnd();
  }
}
function Repair_ng_template_67_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const repair_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("+", repair_r4.products.length - 1, " \xFCr\xFCn \xB7 toplam ", ctx_r4.productTotal(repair_r4), " adet");
  }
}
function Repair_ng_template_67_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 39);
    \u0275\u0275listener("onClick", function Repair_ng_template_67_Conditional_23_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r6);
      const repair_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.complete(repair_r4));
    });
    \u0275\u0275elementEnd();
  }
}
function Repair_ng_template_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "td", 34)(9, "div");
    \u0275\u0275text(10);
    \u0275\u0275elementStart(11, "span", 4);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, Repair_ng_template_67_Conditional_13_Template, 2, 2, "small", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "td", 35);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td");
    \u0275\u0275element(20, "p-tag", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td", 34)(22, "p-button", 37);
    \u0275\u0275listener("onClick", function Repair_ng_template_67_Template_p_button_onClick_22_listener() {
      const repair_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.edit(repair_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, Repair_ng_template_67_Conditional_23_Template, 1, 0, "p-button", 38);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const repair_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("TMR-", repair_r4.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(repair_r4.customer);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Getiren: ", repair_r4.broughtBy);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", repair_r4.products[0] == null ? null : repair_r4.products[0].name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", repair_r4.products[0] == null ? null : repair_r4.products[0].quantity);
    \u0275\u0275advance();
    \u0275\u0275conditional(repair_r4.products.length > 1 ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(repair_r4.createdAt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(18, 11, ctx_r4.laborTotal(repair_r4), "1.2-2"), " TL");
    \u0275\u0275advance(3);
    \u0275\u0275property("value", repair_r4.status)("severity", repair_r4.status === "Ba\u015Flad\u0131" ? "warn" : "success");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(repair_r4.status === "Ba\u015Flad\u0131" ? 23 : -1);
  }
}
function Repair_ng_template_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 40);
    \u0275\u0275text(2, "Tamir kayd\u0131 bulunamad\u0131.");
    \u0275\u0275elementEnd()();
  }
}
var Repair = class _Repair {
  repairState;
  router;
  searchTerm = "";
  statusFilter = "T\xFCm\xFC";
  customerFilter = "T\xFCm\xFC";
  dateFilter = "T\xFCm\xFC";
  dialogVisible = false;
  editingId = null;
  draft = this.emptyRepair();
  constructor(repairState, router) {
    this.repairState = repairState;
    this.router = router;
  }
  get repairs() {
    return this.repairState.records();
  }
  get visibleRepairs() {
    const value = this.searchTerm.toLocaleLowerCase("tr-TR");
    const now = /* @__PURE__ */ new Date();
    return this.repairs.filter((item) => {
      const matchesSearch = `${item.customer} ${item.products.map((product) => product.name).join(" ")} ${item.broughtBy}`.toLocaleLowerCase("tr-TR").includes(value);
      const matchesStatus = this.statusFilter === "T\xFCm\xFC" || item.status === this.statusFilter;
      const matchesCustomer = this.customerFilter === "T\xFCm\xFC" || item.customer === this.customerFilter;
      const createdDate = this.parseDate(item.createdAt);
      const daysAgo = createdDate ? Math.floor((now.getTime() - createdDate.getTime()) / 864e5) : Number.POSITIVE_INFINITY;
      const matchesDate = this.dateFilter === "T\xFCm\xFC" || (this.dateFilter === "Bug\xFCn" ? daysAgo === 0 : daysAgo >= 0 && daysAgo <= 7);
      return matchesSearch && matchesStatus && matchesCustomer && matchesDate;
    });
  }
  get customerOptions() {
    return ["T\xFCm\xFC", ...new Set(this.repairs.map((item) => item.customer))];
  }
  get openCount() {
    return this.repairs.filter((item) => item.status === "Ba\u015Flad\u0131").length;
  }
  get todayCount() {
    return this.repairs.filter((item) => item.createdAt.startsWith("20.09.2026")).length;
  }
  get totalLabor() {
    return this.repairs.filter((item) => item.status === "Ba\u015Flad\u0131").reduce((total, item) => total + this.laborTotal(item), 0);
  }
  laborTotal(repair) {
    return repair.labor.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
  }
  productTotal(repair) {
    return repair.products.reduce((total, item) => total + item.quantity, 0);
  }
  metalTotal(repair) {
    return repair.preciousMetals.reduce((total, item) => total + item.grams, 0);
  }
  filter(event) {
    this.searchTerm = event.target.value;
  }
  parseDate(value) {
    const [datePart, timePart] = value.split(" ");
    if (!datePart)
      return null;
    const [day, month, year] = datePart.split(".").map(Number);
    const [hour = 0, minute = 0] = (timePart ?? "").split(":").map(Number);
    return new Date(year, month - 1, day, hour, minute);
  }
  openNewPage() {
    this.router.navigate(["/repairs/new"]);
  }
  edit(repair) {
    this.editingId = repair.id;
    this.draft = __spreadProps(__spreadValues({}, repair), { products: repair.products.map((item) => __spreadValues({}, item)), labor: repair.labor.map((item) => __spreadValues({}, item)), preciousMetals: [...repair.preciousMetals] });
    this.dialogVisible = true;
  }
  complete(repair) {
    this.repairState.update(__spreadProps(__spreadValues({}, repair), { status: "Tamamland\u0131" }));
  }
  emptyRepair() {
    return { id: 0, customer: "", broughtBy: "", products: [], description: "", labor: [], preciousMetals: [], status: "Ba\u015Flad\u0131", createdAt: "" };
  }
  static \u0275fac = function Repair_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Repair)(\u0275\u0275directiveInject(RepairStateService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Repair, selectors: [["app-repair"]], decls: 72, vars: 17, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "repair-list-page", "flex", "flex-col", "gap-5"], [1, "text-muted-color"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-4"], [1, "text-2xl", "font-semibold", "mt-1", "mb-0"], [1, "text-muted-color", "mt-1", "mb-0"], ["label", "Tamir ba\u015Flat", "icon", "pi pi-wrench", 3, "onClick"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12", "sm:col-span-4"], [1, "card"], [1, "text-3xl", "font-semibold", "mt-3"], [1, "text-orange-500", "text-sm"], [1, "text-primary", "text-sm"], [1, "text-green-500", "text-sm"], [1, "flex", "flex-col", "gap-4", "mb-4"], [1, "text-lg", "font-semibold", "m-0"], [1, "text-muted-color", "font-normal"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "lg:grid-cols-4", "gap-2"], ["pInputText", "", "placeholder", "M\xFC\u015Fteri veya \xFCr\xFCn ara...", 1, "w-full", 3, "input"], [1, "p-inputtext", "w-full", 3, "ngModelChange", "ngModel"], ["value", "T\xFCm\xFC"], ["value", "Ba\u015Flad\u0131"], ["value", "Tamamland\u0131"], [3, "value"], ["value", "Bug\xFCn"], ["value", "Son 7 g\xFCn"], [1, "overflow-x-auto"], ["styleClass", "min-w-[68rem]", 3, "value", "paginator", "rows", "responsiveLayout"], [3, "visibleChange", "visible", "editingId", "draft"], [2, "width", "12rem"], [1, "font-semibold"], [1, "block", "text-muted-color"], [1, "whitespace-nowrap"], [1, "whitespace-nowrap", "font-semibold"], [3, "value", "severity"], ["icon", "pi pi-eye", "text", "", "rounded", "", "aria-label", "Detay", 3, "onClick"], ["icon", "pi pi-check", "text", "", "rounded", "", "severity", "success", "aria-label", "Tamamla"], ["icon", "pi pi-check", "text", "", "rounded", "", "severity", "success", "aria-label", "Tamamla", 3, "onClick"], ["colspan", "7", 1, "text-center", "p-6", "text-muted-color"]], template: function Repair_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "span", 4);
      \u0275\u0275text(3, "Kuyumcu / Tamir \u0130\u015Flemleri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "div")(6, "h1", 6);
      \u0275\u0275text(7, "Tamir \u0130\u015Flemleri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Kabul, i\u015F\xE7ilik ve teslim takibi.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p-button", 8);
      \u0275\u0275listener("onClick", function Repair_Template_p_button_onClick_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openNewPage());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "span", 4);
      \u0275\u0275text(15, "A\xE7\u0131k tamirler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 12);
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19, "Bekleyen");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "div", 10)(21, "div", 11)(22, "span", 4);
      \u0275\u0275text(23, "Bug\xFCn ba\u015Flat\u0131lan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 12);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 14);
      \u0275\u0275text(27, "Bug\xFCn");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "div", 10)(29, "div", 11)(30, "span", 4);
      \u0275\u0275text(31, "Toplam i\u015F\xE7ilik");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 12);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 15);
      \u0275\u0275text(36, "A\xE7\u0131k i\u015F\xE7ilik");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(37, "div", 11)(38, "div", 16)(39, "div")(40, "h2", 17);
      \u0275\u0275text(41, "Kay\u0131tlar ");
      \u0275\u0275elementStart(42, "span", 18);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "div", 19)(45, "input", 20);
      \u0275\u0275listener("input", function Repair_Template_input_input_45_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.filter($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Repair_Template_select_ngModelChange_46_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.statusFilter, $event) || (ctx.statusFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(47, "option", 22);
      \u0275\u0275text(48, "T\xFCm durumlar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "option", 23);
      \u0275\u0275text(50, "Ba\u015Flad\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "option", 24);
      \u0275\u0275text(52, "Tamamland\u0131");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Repair_Template_select_ngModelChange_53_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.customerFilter, $event) || (ctx.customerFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275repeaterCreate(54, Repair_For_55_Template, 2, 2, "option", 25, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "select", 21);
      \u0275\u0275twoWayListener("ngModelChange", function Repair_Template_select_ngModelChange_56_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dateFilter, $event) || (ctx.dateFilter = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(57, "option", 22);
      \u0275\u0275text(58, "T\xFCm tarihler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 26);
      \u0275\u0275text(60, "Bug\xFCn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "option", 27);
      \u0275\u0275text(62, "Son 7 g\xFCn");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(63, "div", 28)(64, "p-table", 29);
      \u0275\u0275template(65, Repair_ng_template_65_Template, 14, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(67, Repair_ng_template_67_Template, 24, 14, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(69, Repair_ng_template_69_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(71, "app-repair-dialog", 30);
      \u0275\u0275twoWayListener("visibleChange", function Repair_Template_app_repair_dialog_visibleChange_71_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.dialogVisible, $event) || (ctx.dialogVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275textInterpolate(ctx.openCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.todayCount);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(34, 14, ctx.totalLabor, "1.2-2"), " TL");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("(", ctx.visibleRepairs.length, ")");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.statusFilter);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.customerFilter);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.customerOptions);
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.dateFilter);
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.visibleRepairs)("paginator", true)("rows", 12)("responsiveLayout", "scroll");
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("visible", ctx.dialogVisible);
      \u0275\u0275property("editingId", ctx.editingId)("draft", ctx.draft);
    }
  }, dependencies: [CommonModule, FormsModule, NgSelectOption, \u0275NgSelectMultipleOption, SelectControlValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, DialogModule, InputNumberModule, InputTextModule, InputText, TableModule, Table, TagModule, Tag, RepairDialog, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Repair, [{
    type: Component,
    args: [{ selector: "app-repair", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule, TagModule, RepairDialog], template: `<div class="repair-list-page flex flex-col gap-5">
    <div>
        <span class="text-muted-color">Kuyumcu / Tamir \u0130\u015Flemleri</span>
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
                <h1 class="text-2xl font-semibold mt-1 mb-0">Tamir \u0130\u015Flemleri</h1>
                <p class="text-muted-color mt-1 mb-0">Kabul, i\u015F\xE7ilik ve teslim takibi.</p>
            </div>

            <p-button label="Tamir ba\u015Flat" icon="pi pi-wrench" (onClick)="openNewPage()" />
        </div>
    </div>
    <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 sm:col-span-4">
            <div class="card">
                <span class="text-muted-color">A\xE7\u0131k tamirler</span>
                <div class="text-3xl font-semibold mt-3">{{ openCount }}</div>
                <span class="text-orange-500 text-sm">Bekleyen</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-4">
            <div class="card">
                <span class="text-muted-color">Bug\xFCn ba\u015Flat\u0131lan</span>
                <div class="text-3xl font-semibold mt-3">{{ todayCount }}</div>
                <span class="text-primary text-sm">Bug\xFCn</span>
            </div>
        </div>
        <div class="col-span-12 sm:col-span-4">
            <div class="card">
                <span class="text-muted-color">Toplam i\u015F\xE7ilik</span>
                <div class="text-3xl font-semibold mt-3">{{ totalLabor | number: '1.2-2' }} TL</div>
                <span class="text-green-500 text-sm">A\xE7\u0131k i\u015F\xE7ilik</span>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="flex flex-col gap-4 mb-4">
            <div>
                <h2 class="text-lg font-semibold m-0">Kay\u0131tlar <span class="text-muted-color font-normal">({{ visibleRepairs.length }})</span></h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
                <input pInputText class="w-full" placeholder="M\xFC\u015Fteri veya \xFCr\xFCn ara..." (input)="filter($event)" />
                <select class="p-inputtext w-full" [(ngModel)]="statusFilter">
                    <option value="T\xFCm\xFC">T\xFCm durumlar</option>
                    <option value="Ba\u015Flad\u0131">Ba\u015Flad\u0131</option>
                    <option value="Tamamland\u0131">Tamamland\u0131</option>
                </select>
                <select class="p-inputtext w-full" [(ngModel)]="customerFilter">
                    @for (customer of customerOptions; track customer) {
                    <option [value]="customer">{{ customer === 'T\xFCm\xFC' ? 'T\xFCm m\xFC\u015Fteriler' : customer }}</option>
                    }
                </select>
                <select class="p-inputtext w-full" [(ngModel)]="dateFilter">
                    <option value="T\xFCm\xFC">T\xFCm tarihler</option>
                    <option value="Bug\xFCn">Bug\xFCn</option>
                    <option value="Son 7 g\xFCn">Son 7 g\xFCn</option>
                </select>
            </div>
        </div>
        <div class="overflow-x-auto">
        <p-table [value]="visibleRepairs" [paginator]="true" [rows]="12" [responsiveLayout]="'scroll'" styleClass="min-w-[68rem]">
            <ng-template #header
                ><tr>
                    <th>Fi\u015F No</th>
                    <th>M\xFC\u015Fteri</th>
                    <th>\xDCr\xFCn</th>
                    <th>Ba\u015Flang\u0131\xE7</th>
                    <th>\u0130\u015F\xE7ilik</th>
                    <th>Durum</th>
                    <th style="width: 12rem"></th></tr
            ></ng-template>
            <ng-template #body let-repair
                ><tr>
                    <td class="font-semibold">TMR-{{ repair.id }}</td>
                    <td><span class="font-semibold">{{ repair.customer }}</span><small class="block text-muted-color">Getiren: {{ repair.broughtBy }}</small></td>
                    <td class="whitespace-nowrap">
                        <div>{{ repair.products[0]?.name }} <span class="text-muted-color">x{{ repair.products[0]?.quantity }}</span></div>
                        @if (repair.products.length > 1) {
                        <small class="text-muted-color">+{{ repair.products.length - 1 }} \xFCr\xFCn \xB7 toplam {{ productTotal(repair) }} adet</small>
                        }
                    </td>
                    <td class="whitespace-nowrap">{{ repair.createdAt }}</td>
                    <td class="whitespace-nowrap font-semibold">{{ laborTotal(repair) | number: '1.2-2' }} TL</td>
                    <td><p-tag [value]="repair.status" [severity]="repair.status === 'Ba\u015Flad\u0131' ? 'warn' : 'success'" /></td>
                    <td class="whitespace-nowrap"><p-button icon="pi pi-eye" text rounded aria-label="Detay" (onClick)="edit(repair)" /> @if (repair.status === 'Ba\u015Flad\u0131') { <p-button icon="pi pi-check" text rounded severity="success" aria-label="Tamamla" (onClick)="complete(repair)" /> }</td>
                </tr></ng-template
            >
            <ng-template #emptymessage
                ><tr>
                    <td colspan="7" class="text-center p-6 text-muted-color">Tamir kayd\u0131 bulunamad\u0131.</td>
                </tr></ng-template
            >
        </p-table>
        </div>
    </div>
</div>

<app-repair-dialog [(visible)]="dialogVisible" [editingId]="editingId" [draft]="draft" />
` }]
  }], () => [{ type: RepairStateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Repair, { className: "Repair", filePath: "src/app/pages/jewelry/repair.ts", lineNumber: 20 });
})();

// src/app/pages/jewelry/labors.ts
function Labors_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1, "D\xFCzenleniyor");
    \u0275\u0275elementEnd();
  }
}
function Labors_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.formError);
  }
}
function Labors_ng_template_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "\u0130\u015F\xE7ilik");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th");
    \u0275\u0275text(4, "A\xE7\u0131klama");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 39);
    \u0275\u0275text(6, "Tutar");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "th", 40);
    \u0275\u0275elementEnd();
  }
}
function Labors_ng_template_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 41);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5, "Tamir i\u015F\xE7ili\u011Fi");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 43);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td", 44)(12, "p-button", 45);
    \u0275\u0275listener("onClick", function Labors_ng_template_87_Template_p_button_onClick_12_listener() {
      const labor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit(labor_r4));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 46);
    \u0275\u0275listener("onClick", function Labors_ng_template_87_Template_p_button_onClick_13_listener() {
      const labor_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(labor_r4));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const labor_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(labor_r4.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(labor_r4.description || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(10, 3, labor_r4.price, "1.2-2"), " \u20BA");
  }
}
function Labors_ng_template_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 47);
    \u0275\u0275text(2, "Araman\u0131zla e\u015Fle\u015Fen i\u015F\xE7ilik bulunamad\u0131.");
    \u0275\u0275elementEnd()();
  }
}
var Labors = class _Labors {
  labors = [
    { id: 1, name: "Kaynak i\u015F\xE7ili\u011Fi", price: 350, description: "Kopuk veya k\u0131r\u0131k par\xE7a kayna\u011F\u0131" },
    { id: 2, name: "Cila i\u015F\xE7ili\u011Fi", price: 250, description: "\xDCr\xFCn y\xFCzey parlatma" },
    { id: 3, name: "Ta\u015F takma i\u015F\xE7ili\u011Fi", price: 500, description: "Eksik ta\u015F montaj\u0131" },
    { id: 4, name: "Lehim i\u015F\xE7ili\u011Fi", price: 300, description: "Hassas ba\u011Flant\u0131 ve birle\u015Ftirme" },
    { id: 5, name: "\xD6l\xE7\xFC k\xFC\xE7\xFCltme", price: 450, description: "Y\xFCz\xFCk \xF6l\xE7\xFCs\xFCn\xFC k\xFC\xE7\xFCltme i\u015Flemi" },
    { id: 6, name: "\xD6l\xE7\xFC b\xFCy\xFCtme", price: 550, description: "Y\xFCz\xFCk \xF6l\xE7\xFCs\xFCn\xFC b\xFCy\xFCtme i\u015Flemi" },
    { id: 7, name: "Zincir onar\u0131m\u0131", price: 280, description: "Kopmu\u015F zincir halkalar\u0131n\u0131n onar\u0131m\u0131" },
    { id: 8, name: "Kilit de\u011Fi\u015Fimi", price: 220, description: "Kolye veya bileklik kilit de\u011Fi\u015Fimi" }
  ];
  editingId = null;
  searchTerm = "";
  formError = "";
  draft = this.empty();
  get filteredLabors() {
    const query = this.searchTerm.trim().toLocaleLowerCase("tr-TR");
    return query ? this.labors.filter((labor) => `${labor.name} ${labor.description}`.toLocaleLowerCase("tr-TR").includes(query)) : this.labors;
  }
  get totalValue() {
    return this.labors.reduce((total, labor) => total + labor.price, 0);
  }
  get averagePrice() {
    return this.labors.length ? this.totalValue / this.labors.length : 0;
  }
  edit(labor) {
    this.editingId = labor.id;
    this.formError = "";
    this.draft = __spreadValues({}, labor);
  }
  save() {
    const name = this.draft.name.trim();
    if (!name) {
      this.formError = "\u0130\u015F\xE7ilik ad\u0131 zorunludur.";
      return;
    }
    if (!this.draft.price || this.draft.price <= 0) {
      this.formError = "Ge\xE7erli bir tutar girin.";
      return;
    }
    const duplicate = this.labors.some((item) => item.id !== this.editingId && item.name.toLocaleLowerCase("tr-TR") === name.toLocaleLowerCase("tr-TR"));
    if (duplicate) {
      this.formError = "Bu isimde bir i\u015F\xE7ilik zaten tan\u0131ml\u0131.";
      return;
    }
    const labor = __spreadProps(__spreadValues({}, this.draft), { name, description: this.draft.description.trim() });
    this.labors = this.editingId === null ? [...this.labors, __spreadProps(__spreadValues({}, labor), { id: Date.now() })] : this.labors.map((item) => item.id === this.editingId ? __spreadProps(__spreadValues({}, labor), { id: this.editingId }) : item);
    this.reset();
  }
  remove(labor) {
    this.labors = this.labors.filter((item) => item.id !== labor.id);
    if (this.editingId === labor.id)
      this.reset();
  }
  reset() {
    this.editingId = null;
    this.formError = "";
    this.draft = this.empty();
  }
  empty() {
    return { id: 0, name: "", price: 0, description: "" };
  }
  static \u0275fac = function Labors_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Labors)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Labors, selectors: [["app-labors"]], decls: 91, vars: 23, consts: [["header", ""], ["body", ""], ["emptymessage", ""], [1, "compact-list-page", "flex", "flex-col", "gap-4"], [1, "text-muted-color"], [1, "flex", "flex-col", "md:flex-row", "md:items-end", "md:justify-between", "gap-3", "mt-2"], [1, "text-2xl", "font-semibold", "mb-0"], [1, "text-muted-color", "mt-1", "mb-0"], ["label", "Yeni i\u015F\xE7ilik", "icon", "pi pi-plus", 3, "onClick"], [1, "grid", "grid-cols-12", "gap-3"], [1, "col-span-12", "md:col-span-4"], [1, "card", "mb-0"], [1, "flex", "items-center", "justify-between"], [1, "pi", "pi-list", "text-primary", "text-xl"], [1, "text-3xl", "font-semibold", "mt-3"], [1, "text-sm", "text-muted-color"], [1, "pi", "pi-chart-line", "text-primary", "text-xl"], [1, "pi", "pi-wallet", "text-primary", "text-xl"], [1, "col-span-12", "xl:col-span-4"], [1, "card"], [1, "flex", "items-start", "justify-between", "gap-3", "mb-5"], [1, "text-xl", "font-semibold", "mt-0", "mb-1"], [1, "text-xs", "px-2", "py-1", "rounded", "bg-primary/10", "text-primary"], [1, "flex", "flex-col", "gap-4"], ["for", "labor-name", 1, "block", "font-medium", "mb-2"], [1, "text-red-500"], ["pInputText", "", "id", "labor-name", "placeholder", "\xD6rn. Kaynak i\u015F\xE7ili\u011Fi", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "labor-price", 1, "block", "font-medium", "mb-2"], ["inputId", "labor-price", "mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "w-full", 3, "ngModelChange", "ngModel", "min"], ["for", "labor-description", 1, "block", "font-medium", "mb-2"], ["pInputText", "", "id", "labor-description", "placeholder", "\u0130\u015F\xE7ilik kapsam\u0131n\u0131 a\xE7\u0131klay\u0131n", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "flex", "gap-2", "pt-2"], ["label", "Temizle", "text", "", 3, "onClick"], ["icon", "pi pi-check", 3, "onClick", "label"], [1, "col-span-12", "xl:col-span-8"], [1, "flex", "flex-col", "md:flex-row", "md:items-center", "md:justify-between", "gap-3", "mb-4"], [1, "text-xl", "font-semibold", "m-0"], ["pInputText", "", "placeholder", "\u0130\u015F\xE7ilik ara...", 1, "w-full", "md:w-18rem", 3, "ngModelChange", "ngModel"], [3, "value", "responsiveLayout", "rowHover"], [1, "text-right"], [2, "width", "7rem"], [1, "font-semibold"], [1, "text-xs", "text-muted-color"], [1, "text-right", "font-semibold"], [1, "text-right", "whitespace-nowrap"], ["icon", "pi pi-pencil", "text", "", "rounded", "", "aria-label", "D\xFCzenle", 3, "onClick"], ["icon", "pi pi-trash", "text", "", "rounded", "", "severity", "danger", "aria-label", "Sil", 3, "onClick"], ["colspan", "4", 1, "text-center", "py-6", "text-muted-color"]], template: function Labors_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div")(2, "span", 4);
      \u0275\u0275text(3, "Kuyumcu / Tan\u0131mlar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 5)(5, "div")(6, "h1", 6);
      \u0275\u0275text(7, "\u0130\u015F\xE7ilik Tan\u0131mlar\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Tamir i\u015F\xE7iliklerini ve birim tutarlar\u0131n\u0131 y\xF6netin.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "p-button", 8);
      \u0275\u0275listener("onClick", function Labors_Template_p_button_onClick_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reset());
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "span", 4);
      \u0275\u0275text(16, "Tan\u0131ml\u0131 i\u015F\xE7ilik");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "i", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 14);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 15);
      \u0275\u0275text(21, "Kullan\u0131ma haz\u0131r kay\u0131t");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 10)(23, "div", 11)(24, "div", 12)(25, "span", 4);
      \u0275\u0275text(26, "Ortalama tutar");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "i", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 14);
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 15);
      \u0275\u0275text(32, "Tan\u0131ml\u0131 i\u015F\xE7iliklerin ortalamas\u0131");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "div", 10)(34, "div", 11)(35, "div", 12)(36, "span", 4);
      \u0275\u0275text(37, "Tan\u0131m de\u011Feri");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "i", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 14);
      \u0275\u0275text(40);
      \u0275\u0275pipe(41, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span", 15);
      \u0275\u0275text(43, "T\xFCm i\u015F\xE7ilik tutarlar\u0131n\u0131n toplam\u0131");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 9)(45, "div", 18)(46, "div", 19)(47, "div", 20)(48, "div")(49, "h2", 21);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span", 15);
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(53, Labors_Conditional_53_Template, 2, 0, "span", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 23)(55, "div")(56, "label", 24);
      \u0275\u0275text(57, "\u0130\u015F\xE7ilik ad\u0131 ");
      \u0275\u0275elementStart(58, "span", 25);
      \u0275\u0275text(59, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(60, "input", 26);
      \u0275\u0275twoWayListener("ngModelChange", function Labors_Template_input_ngModelChange_60_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.name, $event) || (ctx.draft.name = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div")(62, "label", 27);
      \u0275\u0275text(63, "Birim tutar ");
      \u0275\u0275elementStart(64, "span", 25);
      \u0275\u0275text(65, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "p-inputnumber", 28);
      \u0275\u0275twoWayListener("ngModelChange", function Labors_Template_p_inputnumber_ngModelChange_66_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.price, $event) || (ctx.draft.price = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(67, "div")(68, "label", 29);
      \u0275\u0275text(69, "A\xE7\u0131klama");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "input", 30);
      \u0275\u0275twoWayListener("ngModelChange", function Labors_Template_input_ngModelChange_70_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.draft.description, $event) || (ctx.draft.description = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(71, Labors_Conditional_71_Template, 2, 1, "small", 25);
      \u0275\u0275elementStart(72, "div", 31)(73, "p-button", 32);
      \u0275\u0275listener("onClick", function Labors_Template_p_button_onClick_73_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.reset());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p-button", 33);
      \u0275\u0275listener("onClick", function Labors_Template_p_button_onClick_74_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(75, "div", 34)(76, "div", 19)(77, "div", 35)(78, "div")(79, "h2", 36);
      \u0275\u0275text(80, "Tan\u0131ml\u0131 i\u015F\xE7ilikler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "span", 15);
      \u0275\u0275text(82);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "input", 37);
      \u0275\u0275twoWayListener("ngModelChange", function Labors_Template_input_ngModelChange_83_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.searchTerm, $event) || (ctx.searchTerm = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "p-table", 38);
      \u0275\u0275template(85, Labors_ng_template_85_Template, 8, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(87, Labors_ng_template_87_Template, 14, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(89, Labors_ng_template_89_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(19);
      \u0275\u0275textInterpolate(ctx.labors.length);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(30, 17, ctx.averagePrice, "1.2-2"), " \u20BA");
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(41, 20, ctx.totalValue, "1.2-2"), " \u20BA");
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.editingId === null ? "Yeni i\u015F\xE7ilik" : "\u0130\u015F\xE7ili\u011Fi d\xFCzenle");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editingId === null ? "Yeni bir tamir kalemi olu\u015Fturun." : "Kay\u0131t bilgilerini g\xFCncelleyin.");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.editingId !== null ? 53 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.name);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.price);
      \u0275\u0275property("min", 0);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.draft.description);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.formError ? 71 : -1);
      \u0275\u0275advance(3);
      \u0275\u0275property("label", ctx.editingId === null ? "\u0130\u015F\xE7ilik ekle" : "De\u011Fi\u015Fiklikleri kaydet");
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.filteredLabors.length, " kay\u0131t g\xF6steriliyor");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.searchTerm);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.filteredLabors)("responsiveLayout", "scroll")("rowHover", true);
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, InputNumberModule, InputNumber, InputTextModule, InputText, TableModule, Table, DecimalPipe], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Labors, [{
    type: Component,
    args: [{ selector: "app-labors", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, InputNumberModule, InputTextModule, TableModule], template: `<div class="compact-list-page flex flex-col gap-4">
    <div>
        <span class="text-muted-color">Kuyumcu / Tan\u0131mlar</span>
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mt-2">
            <div>
                <h1 class="text-2xl font-semibold mb-0">\u0130\u015F\xE7ilik Tan\u0131mlar\u0131</h1>
                <p class="text-muted-color mt-1 mb-0">Tamir i\u015F\xE7iliklerini ve birim tutarlar\u0131n\u0131 y\xF6netin.</p>
            </div>
            <p-button label="Yeni i\u015F\xE7ilik" icon="pi pi-plus" (onClick)="reset()" />
        </div>
    </div>
    <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 md:col-span-4">
            <div class="card mb-0">
                <div class="flex items-center justify-between"><span class="text-muted-color">Tan\u0131ml\u0131 i\u015F\xE7ilik</span><i class="pi pi-list text-primary text-xl"></i></div>
                <div class="text-3xl font-semibold mt-3">{{ labors.length }}</div>
                <span class="text-sm text-muted-color">Kullan\u0131ma haz\u0131r kay\u0131t</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-4">
            <div class="card mb-0">
                <div class="flex items-center justify-between"><span class="text-muted-color">Ortalama tutar</span><i class="pi pi-chart-line text-primary text-xl"></i></div>
                <div class="text-3xl font-semibold mt-3">{{ averagePrice | number: '1.2-2' }} \u20BA</div>
                <span class="text-sm text-muted-color">Tan\u0131ml\u0131 i\u015F\xE7iliklerin ortalamas\u0131</span>
            </div>
        </div>
        <div class="col-span-12 md:col-span-4">
            <div class="card mb-0">
                <div class="flex items-center justify-between"><span class="text-muted-color">Tan\u0131m de\u011Feri</span><i class="pi pi-wallet text-primary text-xl"></i></div>
                <div class="text-3xl font-semibold mt-3">{{ totalValue | number: '1.2-2' }} \u20BA</div>
                <span class="text-sm text-muted-color">T\xFCm i\u015F\xE7ilik tutarlar\u0131n\u0131n toplam\u0131</span>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 xl:col-span-4">
            <div class="card">
                <div class="flex items-start justify-between gap-3 mb-5">
                    <div>
                        <h2 class="text-xl font-semibold mt-0 mb-1">{{ editingId === null ? 'Yeni i\u015F\xE7ilik' : '\u0130\u015F\xE7ili\u011Fi d\xFCzenle' }}</h2>
                        <span class="text-sm text-muted-color">{{ editingId === null ? 'Yeni bir tamir kalemi olu\u015Fturun.' : 'Kay\u0131t bilgilerini g\xFCncelleyin.' }}</span>
                    </div>
                    @if (editingId !== null) {<span class="text-xs px-2 py-1 rounded bg-primary/10 text-primary">D\xFCzenleniyor</span>}
                </div>
                <div class="flex flex-col gap-4">
                    <div>
                        <label class="block font-medium mb-2" for="labor-name">\u0130\u015F\xE7ilik ad\u0131 <span class="text-red-500">*</span></label
                        ><input pInputText id="labor-name" class="w-full" placeholder="\xD6rn. Kaynak i\u015F\xE7ili\u011Fi" [(ngModel)]="draft.name" />
                    </div>
                    <div>
                        <label class="block font-medium mb-2" for="labor-price">Birim tutar <span class="text-red-500">*</span></label
                        ><p-inputnumber inputId="labor-price" class="w-full" [(ngModel)]="draft.price" mode="currency" currency="TRY" locale="tr-TR" [min]="0" />
                    </div>
                    <div><label class="block font-medium mb-2" for="labor-description">A\xE7\u0131klama</label><input pInputText id="labor-description" class="w-full" placeholder="\u0130\u015F\xE7ilik kapsam\u0131n\u0131 a\xE7\u0131klay\u0131n" [(ngModel)]="draft.description" /></div>
                    @if (formError) {<small class="text-red-500">{{ formError }}</small>}
                    <div class="flex gap-2 pt-2"><p-button label="Temizle" text (onClick)="reset()" /><p-button [label]="editingId === null ? '\u0130\u015F\xE7ilik ekle' : 'De\u011Fi\u015Fiklikleri kaydet'" icon="pi pi-check" (onClick)="save()" /></div>
                </div>
            </div>
        </div>
        <div class="col-span-12 xl:col-span-8">
            <div class="card">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                    <div>
                        <h2 class="text-xl font-semibold m-0">Tan\u0131ml\u0131 i\u015F\xE7ilikler</h2>
                        <span class="text-sm text-muted-color">{{ filteredLabors.length }} kay\u0131t g\xF6steriliyor</span>
                    </div>
                    <input pInputText class="w-full md:w-18rem" placeholder="\u0130\u015F\xE7ilik ara..." [(ngModel)]="searchTerm" />
                </div>
                <p-table [value]="filteredLabors" [responsiveLayout]="'scroll'" [rowHover]="true">
                    <ng-template #header
                        ><tr>
                            <th>\u0130\u015F\xE7ilik</th>
                            <th>A\xE7\u0131klama</th>
                            <th class="text-right">Tutar</th>
                            <th style="width: 7rem"></th></tr
                    ></ng-template>
                    <ng-template #body let-labor
                        ><tr>
                            <td>
                                <div class="font-semibold">{{ labor.name }}</div>
                                <span class="text-xs text-muted-color">Tamir i\u015F\xE7ili\u011Fi</span>
                            </td>
                            <td>{{ labor.description || '-' }}</td>
                            <td class="text-right font-semibold">{{ labor.price | number: '1.2-2' }} \u20BA</td>
                            <td class="text-right whitespace-nowrap">
                                <p-button icon="pi pi-pencil" text rounded aria-label="D\xFCzenle" (onClick)="edit(labor)" /><p-button icon="pi pi-trash" text rounded severity="danger" aria-label="Sil" (onClick)="remove(labor)" />
                            </td></tr
                    ></ng-template>
                    <ng-template #emptymessage
                        ><tr>
                            <td colspan="4" class="text-center py-6 text-muted-color">Araman\u0131zla e\u015Fle\u015Fen i\u015F\xE7ilik bulunamad\u0131.</td>
                        </tr></ng-template
                    >
                </p-table>
            </div>
        </div>
    </div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Labors, { className: "Labors", filePath: "src/app/pages/jewelry/labors.ts", lineNumber: 22 });
})();

// src/app/pages/jewelry/repair-form.ts
var _c06 = () => ({ width: "min(28rem, 94vw)" });
var _forTrack06 = ($index, $item) => $item.name;
var _forTrack12 = ($index, $item) => $item.id;
function RepairForm_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function RepairForm_For_31_Template_button_click_0_listener() {
      const customer_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.draft.customer = customer_r3);
    });
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const customer_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary/10", ctx_r3.draft.customer === customer_r3)("border-primary", ctx_r3.draft.customer === customer_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r3);
  }
}
function RepairForm_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 21);
    \u0275\u0275text(1, "M\xFC\u015Fteri se\xE7ilmesi gerekiyor.");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_For_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function RepairForm_For_38_Template_button_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.draft.broughtBy = user_r6);
    });
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-primary/10", ctx_r3.draft.broughtBy === user_r6)("border-primary", ctx_r3.draft.broughtBy === user_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r6);
  }
}
function RepairForm_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 21);
    \u0275\u0275text(1, "\xDCr\xFCn\xFC getiren ki\u015Fi se\xE7ilmesi gerekiyor.");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_For_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function RepairForm_For_54_Template_button_click_0_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addProduct(product_r8));
    });
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8);
  }
}
function RepairForm_For_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "button", 71);
    \u0275\u0275listener("click", function RepairForm_For_63_Template_button_click_4_listener() {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeProductQuantity(product_r10, -1));
    });
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function RepairForm_For_63_Template_input_ngModelChange_6_listener($event) {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      \u0275\u0275twoWayBindingSet(product_r10.quantity, $event) || (product_r10.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 73);
    \u0275\u0275listener("click", function RepairForm_For_63_Template_button_click_7_listener() {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeProductQuantity(product_r10, 1));
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-button", 74);
    \u0275\u0275listener("onClick", function RepairForm_For_63_Template_p_button_onClick_9_listener() {
      const product_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeProduct(product_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(product_r10.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r10.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", product_r10.quantity);
  }
}
function RepairForm_ForEmpty_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Hen\xFCz \xFCr\xFCn eklenmedi.");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 21);
    \u0275\u0275text(1, "En az bir \xFCr\xFCn ekleyin.");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_For_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 67);
    \u0275\u0275listener("click", function RepairForm_For_79_Template_button_click_0_listener() {
      const labor_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addLabor(labor_r12));
    });
    \u0275\u0275elementStart(1, "span", 75);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 76);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const labor_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(labor_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, labor_r12.price, "1.2-2"), " TL");
  }
}
function RepairForm_For_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "span", 69);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 70)(4, "button", 71);
    \u0275\u0275listener("click", function RepairForm_For_92_Template_button_click_4_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeLaborQuantity(item_r14, -1));
    });
    \u0275\u0275text(5, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function RepairForm_For_92_Template_input_ngModelChange_6_listener($event) {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(item_r14.quantity, $event) || (item_r14.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 73);
    \u0275\u0275listener("click", function RepairForm_For_92_Template_button_click_7_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.changeLaborQuantity(item_r14, 1));
    });
    \u0275\u0275text(8, "+");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-inputnumber", 78);
    \u0275\u0275twoWayListener("ngModelChange", function RepairForm_For_92_Template_p_inputnumber_ngModelChange_9_listener($event) {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      \u0275\u0275twoWayBindingSet(item_r14.price, $event) || (item_r14.price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 79);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-button", 80);
    \u0275\u0275listener("onClick", function RepairForm_For_92_Template_p_button_onClick_13_listener() {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeLabor(item_r14));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("title", \u0275\u0275interpolate(item_r14.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r14.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", item_r14.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", item_r14.price);
    \u0275\u0275property("min", 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(12, 7, item_r14.price * (item_r14.quantity || 1), "1.2-2"), " TL");
  }
}
function RepairForm_ForEmpty_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1, "Hen\xFCz i\u015F\xE7ilik eklenmedi.");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_For_103_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 39)(1, "span", 81);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 82);
    \u0275\u0275twoWayListener("ngModelChange", function RepairForm_For_103_Template_input_ngModelChange_3_listener($event) {
      const metalType_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.metalDraft.gramsByType[metalType_r16], $event) || (ctx_r3.metalDraft.gramsByType[metalType_r16] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-button", 83);
    \u0275\u0275listener("onClick", function RepairForm_For_103_Template_p_button_onClick_4_listener() {
      const metalType_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addMetal(metalType_r16));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metalType_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metalType_r16);
    \u0275\u0275advance();
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275interpolate1("", metalType_r16, " gram"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.metalDraft.gramsByType[metalType_r16]);
  }
}
function RepairForm_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th");
    \u0275\u0275text(2, "Maden");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 34);
    \u0275\u0275text(4, "Gram");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "th", 84);
    \u0275\u0275elementEnd();
  }
}
function RepairForm_ng_template_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td")(7, "p-button", 85);
    \u0275\u0275listener("onClick", function RepairForm_ng_template_108_Template_p_button_onClick_7_listener() {
      const metal_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeMetal(metal_r18));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const metal_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metal_r18.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, metal_r18.grams, "1.3-3"), " gr");
  }
}
function RepairForm_ng_template_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 86);
    \u0275\u0275text(2, "K\u0131ymetli maden eklenmedi.");
    \u0275\u0275elementEnd()();
  }
}
function RepairForm_For_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 65)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r19 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r19.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("x", product_r19.quantity);
  }
}
function RepairForm_ForEmpty_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_For_175_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 65)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const labor_r20 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", labor_r20.name, " x", labor_r20.quantity || 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 3, labor_r20.price * (labor_r20.quantity || 1), "1.2-2"), " TL");
  }
}
function RepairForm_ForEmpty_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_For_182_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 65)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metal_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metal_r21.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 2, metal_r21.grams, "1.3-3"), " gr");
  }
}
function RepairForm_ForEmpty_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function RepairForm_ng_template_190_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 87);
    \u0275\u0275listener("onClick", function RepairForm_ng_template_190_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.receiptVisible = false);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 88);
    \u0275\u0275listener("onClick", function RepairForm_ng_template_190_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.printReceipt());
    });
    \u0275\u0275elementEnd();
  }
}
var RepairForm = class _RepairForm {
  repairState;
  router;
  draft = this.emptyRepair();
  customerOptions;
  userOptions;
  productOptions;
  labors;
  metalTypes;
  metalDraft = { id: 0, type: "Alt\u0131n", grams: 0, gramsByType: { Alt\u0131n: 0, G\u00FCm\u00FC\u015F: 0 } };
  receiptVisible = false;
  productSearch = "";
  laborSearch = "";
  constructor(repairState, router) {
    this.repairState = repairState;
    this.router = router;
    this.customerOptions = repairState.customerOptions;
    this.userOptions = repairState.userOptions;
    this.productOptions = repairState.productOptions;
    this.labors = repairState.labors;
    this.metalTypes = repairState.metalTypes;
  }
  get productCount() {
    return this.draft.products.reduce((total, item) => total + item.quantity, 0);
  }
  get laborCount() {
    return this.draft.labor.reduce((total, item) => total + (item.quantity ?? 1), 0);
  }
  get laborTotal() {
    return this.draft.labor.reduce((total, item) => total + item.price * (item.quantity ?? 1), 0);
  }
  get metalTotal() {
    return this.draft.preciousMetals.reduce((total, item) => total + item.grams, 0);
  }
  get filteredProducts() {
    const query = this.productSearch.trim().toLocaleLowerCase("tr-TR");
    return query ? this.productOptions.filter((product) => product.toLocaleLowerCase("tr-TR").includes(query)) : this.productOptions;
  }
  get filteredLabors() {
    const query = this.laborSearch.trim().toLocaleLowerCase("tr-TR");
    return query ? this.labors.filter((labor) => labor.name.toLocaleLowerCase("tr-TR").includes(query)) : this.labors;
  }
  get canPrintReceipt() {
    return this.draft.products.length > 0 || this.draft.labor.length > 0 || this.draft.preciousMetals.length > 0;
  }
  addProduct(name) {
    const product = this.draft.products.find((item) => item.name === name);
    this.draft.products = product ? this.draft.products.map((item) => item.name === name ? __spreadProps(__spreadValues({}, item), { quantity: item.quantity + 1 }) : item) : [...this.draft.products, { name, quantity: 1 }];
  }
  removeProduct(product) {
    this.draft.products = this.draft.products.filter((item) => item.name !== product.name);
  }
  changeProductQuantity(product, amount) {
    product.quantity = Math.max(1, (product.quantity || 1) + amount);
  }
  addLabor(labor) {
    const item = this.draft.labor.find((selected) => selected.id === labor.id);
    this.draft.labor = item ? this.draft.labor.map((selected) => selected.id === labor.id ? __spreadProps(__spreadValues({}, selected), { quantity: (selected.quantity ?? 1) + 1 }) : selected) : [...this.draft.labor, __spreadProps(__spreadValues({}, labor), { quantity: 1 })];
  }
  removeLabor(labor) {
    this.draft.labor = this.draft.labor.filter((item) => item.id !== labor.id);
  }
  changeLaborQuantity(labor, amount) {
    labor.quantity = Math.max(1, (labor.quantity ?? 1) + amount);
  }
  addMetal(type) {
    const grams = this.metalDraft.gramsByType[type] ?? 0;
    if (grams > 0) {
      this.draft.preciousMetals = [...this.draft.preciousMetals, { id: Date.now(), type, grams }];
      this.metalDraft.gramsByType[type] = 0;
    }
  }
  removeMetal(metal) {
    this.draft.preciousMetals = this.draft.preciousMetals.filter((item) => item.id !== metal.id);
  }
  openReceipt() {
    if (!this.canPrintReceipt)
      return;
    this.receiptVisible = true;
  }
  printReceipt() {
    if (!this.canPrintReceipt)
      return;
    const receiptWindow = window.open("", "_blank", "width=360,height=720");
    if (!receiptWindow)
      return;
    const products = this.draft.products.map((item) => `<li>${item.name} <strong>x${item.quantity}</strong></li>`).join("");
    const labors = this.draft.labor.map((item) => `<li>${item.name} x${item.quantity ?? 1}<span>${(item.price * (item.quantity ?? 1)).toLocaleString("tr-TR", { minimumFractionDigits: 2 })} TL</span></li>`).join("");
    const metals = this.draft.preciousMetals.map((item) => `<li>${item.type}<span>${item.grams.toLocaleString("tr-TR", { minimumFractionDigits: 3, maximumFractionDigits: 3 })} gr</span></li>`).join("");
    receiptWindow.document.write(`
            <!doctype html>
            <html lang="tr">
                <head>
                    <meta charset="utf-8">
                    <title>Tamir Fi\u015Fi</title>
                    <style>
                        @page { size: 80mm auto; margin: 0; }
                        * { box-sizing: border-box; }
                        body { width: 72mm; margin: 0 auto; padding: 4mm 0; color: #111; font: 12px/1.4 Arial, sans-serif; }
                        h1 { margin: 0 0 2mm; text-align: center; font-size: 16px; }
                        .muted { color: #555; text-align: center; }
                        .line { border-top: 1px dashed #222; margin: 3mm 0; }
                        .row, li { display: flex; justify-content: space-between; gap: 8px; }
                        ul { list-style: none; padding: 0; margin: 1mm 0; }
                        li { margin: 1mm 0; }
                        .total { font-size: 14px; font-weight: 700; }
                        @media print { body { width: 72mm; } }
                    </style>
                </head>
                <body>
                    <h1>TAM\u0130R F\u0130\u015E\u0130</h1>
                    <div class="muted">${this.draft.customer || "-"}</div>
                    <div class="row"><span>Getiren</span><strong>${this.draft.broughtBy || "-"}</strong></div>
                    <div class="line"></div>
                    <strong>\xDCr\xFCnler</strong><ul>${products || "<li>-</li>"}</ul>
                    <div class="line"></div>
                    <strong>\u0130\u015F\xE7ilikler</strong><ul>${labors || "<li>-</li>"}</ul>
                    <div class="line"></div>
                    <strong>K\u0131ymetli madenler</strong><ul>${metals || "<li>-</li>"}</ul>
                    <div class="line"></div>
                    <div class="row total"><span>\u0130\u015F\xE7ilik toplam\u0131</span><span>${this.laborTotal.toLocaleString("tr-TR", { minimumFractionDigits: 2 })} TL</span></div>
                </body>
            </html>
        `);
    receiptWindow.document.close();
    receiptWindow.focus();
    receiptWindow.print();
    receiptWindow.close();
  }
  save() {
    if (!this.draft.customer || !this.draft.broughtBy || !this.draft.products.length)
      return;
    this.repairState.add(__spreadProps(__spreadValues({}, this.draft), {
      id: Date.now(),
      status: "Ba\u015Flad\u0131",
      createdAt: "20.09.2026 " + (/* @__PURE__ */ new Date()).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })
    }));
    this.router.navigate(["/repairs"]);
  }
  cancel() {
    this.router.navigate(["/repairs"]);
  }
  emptyRepair() {
    return { id: 0, customer: "", broughtBy: "", products: [], description: "", labor: [], preciousMetals: [], status: "Ba\u015Flad\u0131", createdAt: "" };
  }
  static \u0275fac = function RepairForm_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RepairForm)(\u0275\u0275directiveInject(RepairStateService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RepairForm, selectors: [["app-repair-form"]], decls: 192, vars: 42, consts: [["header", ""], ["body", ""], ["emptymessage", ""], ["footer", ""], [1, "compact-repair-page", "flex", "flex-col", "gap-2"], [1, "flex", "flex-col", "sm:flex-row", "sm:items-center", "sm:justify-between", "gap-2"], [1, "text-sm", "text-muted-color"], [1, "text-xl", "font-semibold", "mt-1", "mb-0"], [1, "flex", "items-center", "gap-2", "text-sm", "text-muted-color", "mt-2"], ["label", "Tamir listesine d\xF6n", "icon", "pi pi-arrow-left", "text", "", 3, "onClick"], [1, "grid", "grid-cols-12", "gap-5", "items-start"], [1, "repair-stepper", "col-span-12", "xl:col-span-9", "grid", "grid-cols-12", "gap-3"], [1, "repair-group-label", "col-span-12"], [1, "card", "repair-group-card", "col-span-12"], [1, "section-heading"], [1, "text-base", "font-semibold", "m-0"], [1, "grid", "grid-cols-12", "gap-4"], [1, "col-span-12"], [1, "block", "text-sm", "font-medium", "mb-2"], [1, "grid", "grid-cols-2", "md:grid-cols-3", "gap-1.5"], ["type", "button", 1, "option-button", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "bg-primary/10", "border-primary"], [1, "block", "mt-1", "text-sm", "text-muted-color"], [1, "grid", "grid-cols-2", "md:grid-cols-4", "gap-1.5"], [1, "card", "repair-group-card", "col-span-12", "lg:col-span-12"], [1, "section-heading", "flex", "items-center", "justify-between", "gap-3"], ["pInputText", "", "placeholder", "\xDCr\xFCn ara...", 1, "w-full", "mb-2", 3, "ngModelChange", "ngModel"], [1, "option-picker", "grid", "grid-cols-2", "md:grid-cols-4", "gap-1.5", "mb-2"], ["type", "button", 1, "option-button", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors"], [1, "selected-list", "product-selected-list"], [1, "selected-list-header"], [1, "selected-list-row", "product-row"], [1, "selected-list-empty"], ["pInputText", "", "placeholder", "\u0130\u015F\xE7ilik ara...", 1, "w-full", "mb-2", 3, "ngModelChange", "ngModel"], [1, "selected-list", "labor-selected-list"], [1, "text-right"], [1, "selected-list-row", "labor-row"], [1, "card", "repair-group-card", "repair-collapsible", "col-span-12"], [1, "flex", "items-center", "justify-between", "gap-3"], [1, "grid", "grid-cols-1", "gap-1.5", "mt-4"], [1, "flex", "items-center", "gap-1.5", "p-1.5", "rounded-border", "border", "border-surface"], [1, "table-scroll", "mt-4"], ["styleClass", "repair-table compact-table", 3, "value"], [1, "col-span-12", "xl:col-span-3"], [1, "repair-group-label", "mb-1"], [1, "card", "summary-card"], [1, "text-lg", "font-semibold", "mt-0"], [1, "text-sm", "text-muted-color", "mt-1", "mb-0"], [1, "flex", "flex-col", "gap-2", "mt-3"], [1, "flex", "justify-between"], [1, "text-muted-color"], [1, "border-t", "border-surface", "mt-3", "pt-3", "flex", "justify-between", "items-center"], [1, "font-semibold"], [1, "text-xl", "text-primary"], [1, "summary-actions"], [1, "primary-actions"], ["label", "Tamiri kaydet", "icon", "pi pi-check", 1, "w-full", 3, "onClick", "disabled"], ["label", "Tamir \xF6zetini yazd\u0131r", "icon", "pi pi-print", "severity", "secondary", "outlined", "", 1, "w-full", 3, "onClick", "disabled"], [1, "secondary-actions"], ["label", "Vazge\xE7", "text", "", 3, "onClick"], ["header", "Tamir \xF6zeti / adisyon fi\u015Fi", 3, "visibleChange", "visible", "modal", "draggable"], [1, "receipt-preview"], [1, "text-center", "border-b", "border-dashed", "border-surface", "pb-3"], [1, "text-lg", "font-bold"], [1, "py-3", "border-b", "border-dashed", "border-surface"], [1, "list-none", "p-0", "m-0", "mt-2", "flex", "flex-col", "gap-1"], [1, "flex", "justify-between", "gap-3"], [1, "flex", "justify-between", "gap-3", "pt-3", "text-lg", "font-bold"], ["type", "button", 1, "option-button", "text-left", "rounded-border", "border", "border-surface", "hover:border-primary", "hover:bg-primary/5", "transition-colors", 3, "click"], [1, "font-semibold", "text-sm"], [1, "selected-item-name", 3, "title"], [1, "quantity-control"], ["type", "button", "aria-label", "Adedi azalt", 1, "quantity-button", 3, "click"], ["pInputText", "", "type", "number", "min", "1", "aria-label", "\xDCr\xFCn adedi", 1, "quantity-input", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-label", "Adedi art\u0131r", 1, "quantity-button", 3, "click"], ["icon", "pi pi-trash", "text", "", "rounded", "", "severity", "danger", "aria-label", "\xDCr\xFCn\xFC kald\u0131r", 3, "onClick"], [1, "block", "font-semibold", "text-sm"], [1, "block", "text-primary", "text-sm", "mt-1"], ["pInputText", "", "type", "number", "min", "1", "aria-label", "\u0130\u015F\xE7ilik adedi", 1, "quantity-input", 3, "ngModelChange", "ngModel"], ["mode", "currency", "currency", "TRY", "locale", "tr-TR", 1, "price-field", "selected-price", 3, "ngModelChange", "ngModel", "min"], [1, "selected-total"], ["icon", "pi pi-trash", "text", "", "rounded", "", "severity", "danger", "aria-label", "\u0130\u015F\xE7ili\u011Fi kald\u0131r", 3, "onClick"], [1, "metal-label", "font-semibold", "text-sm"], ["pInputText", "", "type", "number", "min", "0.001", "step", "0.001", "placeholder", "Gram", 1, "metal-field", "flex-1", 3, "ngModelChange", "ngModel", "aria-label"], ["icon", "pi pi-plus", "label", "Ekle", "size", "small", "outlined", "", 3, "onClick"], [2, "width", "4rem"], ["icon", "pi pi-times", "text", "", "severity", "danger", 3, "onClick"], ["colspan", "3", 1, "text-center", "p-5", "text-muted-color"], ["label", "Kapat", "text", "", 3, "onClick"], ["label", "Fi\u015Fi yazd\u0131r", "icon", "pi pi-print", 3, "onClick"]], template: function RepairForm_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div")(3, "span", 6);
      \u0275\u0275text(4, "Kuyumcu / Tamir \u0130\u015Flemleri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 7);
      \u0275\u0275text(6, "Yeni tamir kayd\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 8)(8, "span");
      \u0275\u0275text(9, "Ad\u0131m 1/3 \xB7 Bilgileri doldurun");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "\u2022");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "span");
      \u0275\u0275text(13, "Taslak");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "p-button", 9);
      \u0275\u0275listener("onClick", function RepairForm_Template_p_button_onClick_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "div", 12);
      \u0275\u0275text(18, "1. Kabul bilgileri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 13)(20, "div", 14)(21, "h2", 15);
      \u0275\u0275text(22, "M\xFC\u015Fteri ve teslim");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 6);
      \u0275\u0275text(24, "Zorunlu alanlar *");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "div", 16)(26, "div", 17)(27, "label", 18);
      \u0275\u0275text(28, "Mevcut m\xFC\u015Fteri *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 19);
      \u0275\u0275repeaterCreate(30, RepairForm_For_31_Template, 3, 5, "button", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, RepairForm_Conditional_32_Template, 2, 0, "small", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "div", 17)(34, "label", 18);
      \u0275\u0275text(35, "\xDCr\xFCn\xFC getiren *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "div", 22);
      \u0275\u0275repeaterCreate(37, RepairForm_For_38_Template, 3, 5, "button", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(39, RepairForm_Conditional_39_Template, 2, 0, "small", 21);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(40, "div", 12);
      \u0275\u0275text(41, "2. Tamir kalemleri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 23)(43, "div", 24)(44, "div")(45, "h2", 15);
      \u0275\u0275text(46, "\xDCr\xFCn / tak\u0131 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 6);
      \u0275\u0275text(48, "Tamir edilecek \xFCr\xFCnleri se\xE7in.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "strong", 6);
      \u0275\u0275text(50);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "input", 25);
      \u0275\u0275twoWayListener("ngModelChange", function RepairForm_Template_input_ngModelChange_51_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.productSearch, $event) || (ctx.productSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div", 26);
      \u0275\u0275repeaterCreate(53, RepairForm_For_54_Template, 3, 1, "button", 27, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 28)(56, "div", 29)(57, "span");
      \u0275\u0275text(58, "Se\xE7ilen \xFCr\xFCn");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "Adet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(61, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(62, RepairForm_For_63_Template, 10, 4, "div", 30, _forTrack06, false, RepairForm_ForEmpty_64_Template, 2, 0, "div", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(65, RepairForm_Conditional_65_Template, 2, 0, "small", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 23)(67, "div", 24)(68, "div")(69, "h2", 15);
      \u0275\u0275text(70, "3. \u0130\u015F\xE7ilik");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "span", 6);
      \u0275\u0275text(72, "Gerekliyse i\u015F\xE7ilik kalemi ekleyin.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "strong", 6);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "input", 32);
      \u0275\u0275twoWayListener("ngModelChange", function RepairForm_Template_input_ngModelChange_76_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.laborSearch, $event) || (ctx.laborSearch = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 26);
      \u0275\u0275repeaterCreate(78, RepairForm_For_79_Template, 6, 5, "button", 27, _forTrack12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(80, "div", 33)(81, "div", 29)(82, "span");
      \u0275\u0275text(83, "Se\xE7ilen i\u015F\xE7ilik");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "span");
      \u0275\u0275text(85, "Adet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "span");
      \u0275\u0275text(87, "Birim");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "span", 34);
      \u0275\u0275text(89, "Toplam");
      \u0275\u0275elementEnd();
      \u0275\u0275element(90, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(91, RepairForm_For_92_Template, 14, 10, "div", 35, _forTrack12, false, RepairForm_ForEmpty_93_Template, 2, 0, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 12);
      \u0275\u0275text(95, "4. Ek bilgiler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "details", 36)(97, "summary", 37);
      \u0275\u0275text(98, "K\u0131ymetli madenler ");
      \u0275\u0275elementStart(99, "span", 6);
      \u0275\u0275text(100, "\u0130ste\u011Fe ba\u011Fl\u0131");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(101, "div", 38);
      \u0275\u0275repeaterCreate(102, RepairForm_For_103_Template, 5, 4, "div", 39, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 40)(105, "p-table", 41);
      \u0275\u0275template(106, RepairForm_ng_template_106_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(108, RepairForm_ng_template_108_Template, 8, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(110, RepairForm_ng_template_110_Template, 3, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(112, "div", 42)(113, "div", 43);
      \u0275\u0275text(114, "Kay\u0131t \xF6zeti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "div", 44)(116, "h2", 45);
      \u0275\u0275text(117, "Kay\u0131t \xF6zeti");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p", 46);
      \u0275\u0275text(119, "Kaydetmeden \xF6nce bilgileri kontrol edin.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "div", 47)(121, "div", 48)(122, "span", 49);
      \u0275\u0275text(123, "M\xFC\u015Fteri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "strong");
      \u0275\u0275text(125);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(126, "div", 48)(127, "span", 49);
      \u0275\u0275text(128, "\xDCr\xFCn adedi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "strong");
      \u0275\u0275text(130);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 48)(132, "span", 49);
      \u0275\u0275text(133, "\u0130\u015F\xE7ilik adedi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "strong");
      \u0275\u0275text(135);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 48)(137, "span", 49);
      \u0275\u0275text(138, "Maden");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "strong");
      \u0275\u0275text(140);
      \u0275\u0275pipe(141, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(142, "div", 50)(143, "span", 51);
      \u0275\u0275text(144, "\u0130\u015F\xE7ilik toplam\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "strong", 52);
      \u0275\u0275text(146);
      \u0275\u0275pipe(147, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(148, "div", 53)(149, "div", 54)(150, "p-button", 55);
      \u0275\u0275listener("onClick", function RepairForm_Template_p_button_onClick_150_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.save());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(151, "p-button", 56);
      \u0275\u0275listener("onClick", function RepairForm_Template_p_button_onClick_151_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openReceipt());
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(152, "div", 57)(153, "p-button", 58);
      \u0275\u0275listener("onClick", function RepairForm_Template_p_button_onClick_153_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.cancel());
      });
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(154, "p-dialog", 59);
      \u0275\u0275twoWayListener("visibleChange", function RepairForm_Template_p_dialog_visibleChange_154_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.receiptVisible, $event) || (ctx.receiptVisible = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementStart(155, "div", 60)(156, "div", 61)(157, "div", 62);
      \u0275\u0275text(158, "TAM\u0130R F\u0130\u015E\u0130");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 6);
      \u0275\u0275text(160);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "div", 6);
      \u0275\u0275text(162);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 63)(164, "strong");
      \u0275\u0275text(165, "\xDCr\xFCnler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "ul", 64);
      \u0275\u0275repeaterCreate(167, RepairForm_For_168_Template, 5, 2, "li", 65, _forTrack06, false, RepairForm_ForEmpty_169_Template, 2, 0, "li", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 63)(171, "strong");
      \u0275\u0275text(172, "\u0130\u015F\xE7ilikler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "ul", 64);
      \u0275\u0275repeaterCreate(174, RepairForm_For_175_Template, 6, 6, "li", 65, _forTrack12, false, RepairForm_ForEmpty_176_Template, 2, 0, "li", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 63)(178, "strong");
      \u0275\u0275text(179, "K\u0131ymetli madenler");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "ul", 64);
      \u0275\u0275repeaterCreate(181, RepairForm_For_182_Template, 6, 5, "li", 65, _forTrack12, false, RepairForm_ForEmpty_183_Template, 2, 0, "li", 49);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(184, "div", 66)(185, "span");
      \u0275\u0275text(186, "\u0130\u015F\xE7ilik toplam\u0131");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(187, "span");
      \u0275\u0275text(188);
      \u0275\u0275pipe(189, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(190, RepairForm_ng_template_190_Template, 2, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(30);
      \u0275\u0275repeater(ctx.customerOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.draft.customer ? 32 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.userOptions);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.draft.broughtBy ? 39 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate1("", ctx.productCount, " adet");
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.productSearch);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredProducts);
      \u0275\u0275advance(9);
      \u0275\u0275repeater(ctx.draft.products);
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.draft.products.length ? 65 : -1);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate2("", ctx.laborCount, " adet \xB7 ", \u0275\u0275pipeBind2(75, 29, ctx.laborTotal, "1.2-2"), " TL");
      \u0275\u0275advance(2);
      \u0275\u0275twoWayProperty("ngModel", ctx.laborSearch);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.filteredLabors);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.draft.labor);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.metalTypes);
      \u0275\u0275advance(3);
      \u0275\u0275property("value", ctx.draft.preciousMetals);
      \u0275\u0275advance(20);
      \u0275\u0275textInterpolate(ctx.draft.customer || "-");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.productCount);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.laborCount);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(141, 32, ctx.metalTotal, "1.3-3"), " gr");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(147, 35, ctx.laborTotal, "1.2-2"), " TL");
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.draft.customer || !ctx.draft.broughtBy || !ctx.draft.products.length);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.canPrintReceipt);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(41, _c06));
      \u0275\u0275twoWayProperty("visible", ctx.receiptVisible);
      \u0275\u0275property("modal", true)("draggable", false);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.draft.customer || "M\xFC\u015Fteri se\xE7ilmedi");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Getiren: ", ctx.draft.broughtBy || "-");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.draft.products);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.draft.labor);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.draft.preciousMetals);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(189, 38, ctx.laborTotal, "1.2-2"), " TL");
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, ButtonModule, Button, DialogModule, Dialog, InputNumberModule, InputNumber, InputTextModule, InputText, TableModule, Table, DecimalPipe], styles: ["\n\n.compact-repair-page[_ngcontent-%COMP%] {\n  --repair-gap: 0.75rem;\n  max-width: 96rem;\n  margin-inline: auto;\n  width: 100%;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .repair-group-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.35rem 0.15rem 0;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .repair-group-card[_ngcontent-%COMP%] {\n  border-top: 2px solid var(--primary-color);\n}\n.compact-repair-page[_ngcontent-%COMP%]   .option-button[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.7rem;\n  min-height: 2.5rem;\n  line-height: 1.2;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .option-button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .option-picker[_ngcontent-%COMP%] {\n  max-height: 9.5rem;\n  overflow-y: auto;\n  padding-right: 0.15rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-tbody[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > td[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%]    > tr[_ngcontent-%COMP%]    > th[_ngcontent-%COMP%] {\n  padding: 0.55rem 0.65rem;\n  white-space: nowrap;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .repair-table[_ngcontent-%COMP%] {\n  min-width: 34rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-list[_ngcontent-%COMP%] {\n  border: 1px solid var(--surface-border);\n  border-radius: 0.6rem;\n  overflow: hidden;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .selected-list-row[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 0.75rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%] {\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .product-row[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .product-selected-list[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) 6.5rem 2.25rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .labor-row[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .labor-selected-list[_ngcontent-%COMP%]   .selected-list-header[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(12rem, 1fr) 7rem 9rem 9rem 2.25rem;\n  min-width: 41.25rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .labor-selected-list[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-list-row[_ngcontent-%COMP%] {\n  min-height: 3.25rem;\n  border-top: 1px solid var(--surface-border);\n  background: var(--surface-0);\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-item-name[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-list[_ngcontent-%COMP%]   .quantity-field[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .selected-list[_ngcontent-%COMP%]   .price-field[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .quantity-control[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.75rem minmax(2rem, 1fr) 1.75rem;\n  align-items: center;\n  width: 6.5rem;\n  overflow: hidden;\n  border: 1px solid var(--surface-border);\n  border-radius: 0.45rem;\n  background: var(--surface-0);\n}\n.compact-repair-page[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%] {\n  height: 2rem;\n  border: 0;\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .quantity-button[_ngcontent-%COMP%]:hover {\n  color: var(--primary-color);\n  background: var(--primary-50);\n}\n.compact-repair-page[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  height: 2rem;\n  padding: 0 0.15rem;\n  border: 0;\n  border-right: 1px solid var(--surface-border);\n  border-left: 1px solid var(--surface-border);\n  border-radius: 0;\n  text-align: center;\n  box-shadow: none;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, \n.compact-repair-page[_ngcontent-%COMP%]   .quantity-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  margin: 0;\n  appearance: none;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-total[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .selected-list-empty[_ngcontent-%COMP%] {\n  padding: 1rem;\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  text-align: center;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .quantity-field[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .price-field[_ngcontent-%COMP%], \n.compact-repair-page[_ngcontent-%COMP%]   .metal-field[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  min-width: 0;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .metal-label[_ngcontent-%COMP%] {\n  min-width: 3rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .summary-card[_ngcontent-%COMP%] {\n  align-self: start;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--surface-border);\n}\n.compact-repair-page[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%]   .primary-actions[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n}\n.compact-repair-page[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%]   .secondary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=repair-form.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RepairForm, [{
    type: Component,
    args: [{ selector: "app-repair-form", standalone: true, imports: [CommonModule, FormsModule, ButtonModule, DialogModule, InputNumberModule, InputTextModule, TableModule], template: `<div class="compact-repair-page flex flex-col gap-2">\r
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">\r
        <div>\r
            <span class="text-sm text-muted-color">Kuyumcu / Tamir \u0130\u015Flemleri</span>\r
            <h1 class="text-xl font-semibold mt-1 mb-0">Yeni tamir kayd\u0131</h1>\r
            <div class="flex items-center gap-2 text-sm text-muted-color mt-2">\r
                <span>Ad\u0131m 1/3 \xB7 Bilgileri doldurun</span>\r
                <span>\u2022</span>\r
                <span>Taslak</span>\r
            </div>\r
        </div>\r
        <p-button label="Tamir listesine d\xF6n" icon="pi pi-arrow-left" text (onClick)="cancel()" />\r
    </div>\r
\r
    <div class="grid grid-cols-12 gap-5 items-start">\r
        <div class="repair-stepper col-span-12 xl:col-span-9 grid grid-cols-12 gap-3">\r
            <div class="repair-group-label col-span-12">1. Kabul bilgileri</div>\r
            <div class="card repair-group-card col-span-12">\r
                <div class="section-heading"><h2 class="text-base font-semibold m-0">M\xFC\u015Fteri ve teslim</h2><span class="text-sm text-muted-color">Zorunlu alanlar *</span></div>\r
                <div class="grid grid-cols-12 gap-4">\r
                    <div class="col-span-12">\r
                        <label class="block text-sm font-medium mb-2">Mevcut m\xFC\u015Fteri *</label>\r
                        <div class="grid grid-cols-2 md:grid-cols-3 gap-1.5">\r
                            @for (customer of customerOptions; track customer) {\r
                            <button type="button" class="option-button text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors" [class.bg-primary/10]="draft.customer === customer" [class.border-primary]="draft.customer === customer" (click)="draft.customer = customer">\r
                                <span class="font-semibold text-sm">{{ customer }}</span>\r
                            </button>\r
                            }\r
                        </div>\r
                        @if (!draft.customer) {\r
                        <small class="block mt-1 text-sm text-muted-color">M\xFC\u015Fteri se\xE7ilmesi gerekiyor.</small>\r
                        }\r
                    </div>\r
                    <div class="col-span-12">\r
                        <label class="block text-sm font-medium mb-2">\xDCr\xFCn\xFC getiren *</label>\r
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-1.5">\r
                            @for (user of userOptions; track user) {\r
                            <button type="button" class="option-button text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors" [class.bg-primary/10]="draft.broughtBy === user" [class.border-primary]="draft.broughtBy === user" (click)="draft.broughtBy = user">\r
                                <span class="font-semibold text-sm">{{ user }}</span>\r
                            </button>\r
                            }\r
                        </div>\r
                        @if (!draft.broughtBy) {\r
                        <small class="block mt-1 text-sm text-muted-color">\xDCr\xFCn\xFC getiren ki\u015Fi se\xE7ilmesi gerekiyor.</small>\r
                        }\r
                    </div>\r
                </div>\r
            </div>\r
\r
            <div class="repair-group-label col-span-12">2. Tamir kalemleri</div>\r
            <div class="card repair-group-card col-span-12 lg:col-span-12">\r
                <div class="section-heading flex items-center justify-between gap-3">\r
                    <div><h2 class="text-base font-semibold m-0">\xDCr\xFCn / tak\u0131 *</h2><span class="text-sm text-muted-color">Tamir edilecek \xFCr\xFCnleri se\xE7in.</span></div>\r
                    <strong class="text-sm text-muted-color">{{ productCount }} adet</strong>\r
                </div>\r
                <input pInputText class="w-full mb-2" placeholder="\xDCr\xFCn ara..." [(ngModel)]="productSearch" />\r
                <div class="option-picker grid grid-cols-2 md:grid-cols-4 gap-1.5 mb-2">\r
                    @for (product of filteredProducts; track product) {\r
                    <button type="button" class="option-button text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors" (click)="addProduct(product)">\r
                        <span class="font-semibold text-sm">{{ product }}</span>\r
                    </button>\r
                    }\r
                </div>\r
                <div class="selected-list product-selected-list">\r
                    <div class="selected-list-header"><span>Se\xE7ilen \xFCr\xFCn</span><span>Adet</span><span></span></div>\r
                    @for (product of draft.products; track product.name) {\r
                    <div class="selected-list-row product-row">\r
                        <span class="selected-item-name" title="{{ product.name }}">{{ product.name }}</span>\r
                        <div class="quantity-control">\r
                            <button type="button" class="quantity-button" aria-label="Adedi azalt" (click)="changeProductQuantity(product, -1)">\u2212</button>\r
                            <input pInputText class="quantity-input" type="number" min="1" [(ngModel)]="product.quantity" aria-label="\xDCr\xFCn adedi" />\r
                            <button type="button" class="quantity-button" aria-label="Adedi art\u0131r" (click)="changeProductQuantity(product, 1)">+</button>\r
                        </div>\r
                        <p-button icon="pi pi-trash" text rounded severity="danger" aria-label="\xDCr\xFCn\xFC kald\u0131r" (onClick)="removeProduct(product)" />\r
                    </div>\r
                    } @empty {\r
                    <div class="selected-list-empty">Hen\xFCz \xFCr\xFCn eklenmedi.</div>\r
                    }\r
                </div>\r
                @if (!draft.products.length) {\r
                <small class="block mt-1 text-sm text-muted-color">En az bir \xFCr\xFCn ekleyin.</small>\r
                }\r
            </div>\r
\r
            <div class="card repair-group-card col-span-12 lg:col-span-12">\r
                <div class="section-heading flex items-center justify-between gap-3">\r
                    <div><h2 class="text-base font-semibold m-0">3. \u0130\u015F\xE7ilik</h2><span class="text-sm text-muted-color">Gerekliyse i\u015F\xE7ilik kalemi ekleyin.</span></div>\r
                    <strong class="text-sm text-muted-color">{{ laborCount }} adet \xB7 {{ laborTotal | number: '1.2-2' }} TL</strong>\r
                </div>\r
                <input pInputText class="w-full mb-2" placeholder="\u0130\u015F\xE7ilik ara..." [(ngModel)]="laborSearch" />\r
                <div class="option-picker grid grid-cols-2 md:grid-cols-4 gap-1.5 mb-2">\r
                    @for (labor of filteredLabors; track labor.id) {\r
                    <button type="button" class="option-button text-left rounded-border border border-surface hover:border-primary hover:bg-primary/5 transition-colors" (click)="addLabor(labor)">\r
                        <span class="block font-semibold text-sm">{{ labor.name }}</span><span class="block text-primary text-sm mt-1">{{ labor.price | number: '1.2-2' }} TL</span>\r
                    </button>\r
                    }\r
                </div>\r
                <div class="selected-list labor-selected-list">\r
                    <div class="selected-list-header"><span>Se\xE7ilen i\u015F\xE7ilik</span><span>Adet</span><span>Birim</span><span class="text-right">Toplam</span><span></span></div>\r
                    @for (item of draft.labor; track item.id) {\r
                    <div class="selected-list-row labor-row">\r
                        <span class="selected-item-name" title="{{ item.name }}">{{ item.name }}</span>\r
                        <div class="quantity-control">\r
                            <button type="button" class="quantity-button" aria-label="Adedi azalt" (click)="changeLaborQuantity(item, -1)">\u2212</button>\r
                            <input pInputText class="quantity-input" type="number" min="1" [(ngModel)]="item.quantity" aria-label="\u0130\u015F\xE7ilik adedi" />\r
                            <button type="button" class="quantity-button" aria-label="Adedi art\u0131r" (click)="changeLaborQuantity(item, 1)">+</button>\r
                        </div>\r
                        <p-inputnumber class="price-field selected-price" [(ngModel)]="item.price" mode="currency" currency="TRY" locale="tr-TR" [min]="0" />\r
                        <strong class="selected-total">{{ item.price * (item.quantity || 1) | number: '1.2-2' }} TL</strong>\r
                        <p-button icon="pi pi-trash" text rounded severity="danger" aria-label="\u0130\u015F\xE7ili\u011Fi kald\u0131r" (onClick)="removeLabor(item)" />\r
                    </div>\r
                    } @empty {\r
                    <div class="selected-list-empty">Hen\xFCz i\u015F\xE7ilik eklenmedi.</div>\r
                    }\r
                </div>\r
            </div>\r
\r
            <div class="repair-group-label col-span-12">4. Ek bilgiler</div>\r
            <details class="card repair-group-card repair-collapsible col-span-12">\r
                <summary class="flex items-center justify-between gap-3">K\u0131ymetli madenler <span class="text-sm text-muted-color">\u0130ste\u011Fe ba\u011Fl\u0131</span></summary>\r
                <div class="grid grid-cols-1 gap-1.5 mt-4">\r
                    @for (metalType of metalTypes; track metalType) {\r
                    <div class="flex items-center gap-1.5 p-1.5 rounded-border border border-surface">\r
                        <span class="metal-label font-semibold text-sm">{{ metalType }}</span>\r
                        <input pInputText class="metal-field flex-1" type="number" min="0.001" step="0.001" [(ngModel)]="metalDraft.gramsByType[metalType]" placeholder="Gram" aria-label="{{ metalType }} gram" />\r
                        <p-button icon="pi pi-plus" label="Ekle" size="small" outlined (onClick)="addMetal(metalType)" />\r
                    </div>\r
                    }\r
                </div>\r
                <div class="table-scroll mt-4"><p-table [value]="draft.preciousMetals" styleClass="repair-table compact-table">\r
                    <ng-template #header><tr><th>Maden</th><th class="text-right">Gram</th><th style="width: 4rem"></th></tr></ng-template>\r
                    <ng-template #body let-metal><tr><td>{{ metal.type }}</td><td class="text-right">{{ metal.grams | number: '1.3-3' }} gr</td><td><p-button icon="pi pi-times" text severity="danger" (onClick)="removeMetal(metal)" /></td></tr></ng-template>\r
                    <ng-template #emptymessage><tr><td colspan="3" class="text-center p-5 text-muted-color">K\u0131ymetli maden eklenmedi.</td></tr></ng-template>\r
                </p-table></div>\r
            </details>\r
        </div>\r
\r
        <div class="col-span-12 xl:col-span-3">\r
            <div class="repair-group-label mb-1">Kay\u0131t \xF6zeti</div>\r
            <div class="card summary-card">\r
            <h2 class="text-lg font-semibold mt-0">Kay\u0131t \xF6zeti</h2>\r
            <p class="text-sm text-muted-color mt-1 mb-0">Kaydetmeden \xF6nce bilgileri kontrol edin.</p>\r
            <div class="flex flex-col gap-2 mt-3">\r
                    <div class="flex justify-between"><span class="text-muted-color">M\xFC\u015Fteri</span><strong>{{ draft.customer || '-' }}</strong></div>\r
                    <div class="flex justify-between"><span class="text-muted-color">\xDCr\xFCn adedi</span><strong>{{ productCount }}</strong></div>\r
                    <div class="flex justify-between"><span class="text-muted-color">\u0130\u015F\xE7ilik adedi</span><strong>{{ laborCount }}</strong></div>\r
                    <div class="flex justify-between"><span class="text-muted-color">Maden</span><strong>{{ metalTotal | number: '1.3-3' }} gr</strong></div>\r
                </div>\r
                <div class="border-t border-surface mt-3 pt-3 flex justify-between items-center"><span class="font-semibold">\u0130\u015F\xE7ilik toplam\u0131</span><strong class="text-xl text-primary">{{ laborTotal | number: '1.2-2' }} TL</strong></div>\r
                <div class="summary-actions">\r
                    <div class="primary-actions">\r
                        <p-button label="Tamiri kaydet" icon="pi pi-check" class="w-full" (onClick)="save()" [disabled]="!draft.customer || !draft.broughtBy || !draft.products.length" />\r
                        <p-button label="Tamir \xF6zetini yazd\u0131r" icon="pi pi-print" severity="secondary" outlined class="w-full" (onClick)="openReceipt()" [disabled]="!canPrintReceipt" />\r
                    </div>\r
                    <div class="secondary-actions">\r
                        <p-button label="Vazge\xE7" text (onClick)="cancel()" />\r
                    </div>\r
                </div>\r
            </div>\r
        </div>\r
\r
        <p-dialog [(visible)]="receiptVisible" [modal]="true" [draggable]="false" [style]="{ width: 'min(28rem, 94vw)' }" header="Tamir \xF6zeti / adisyon fi\u015Fi">\r
            <div class="receipt-preview">\r
                <div class="text-center border-b border-dashed border-surface pb-3">\r
                    <div class="text-lg font-bold">TAM\u0130R F\u0130\u015E\u0130</div>\r
                    <div class="text-sm text-muted-color">{{ draft.customer || 'M\xFC\u015Fteri se\xE7ilmedi' }}</div>\r
                    <div class="text-sm text-muted-color">Getiren: {{ draft.broughtBy || '-' }}</div>\r
                </div>\r
                <div class="py-3 border-b border-dashed border-surface">\r
                    <strong>\xDCr\xFCnler</strong>\r
                    <ul class="list-none p-0 m-0 mt-2 flex flex-col gap-1">\r
                        @for (product of draft.products; track product.name) {\r
                        <li class="flex justify-between gap-3"><span>{{ product.name }}</span><strong>x{{ product.quantity }}</strong></li>\r
                        } @empty { <li class="text-muted-color">-</li> }\r
                    </ul>\r
                </div>\r
                <div class="py-3 border-b border-dashed border-surface">\r
                    <strong>\u0130\u015F\xE7ilikler</strong>\r
                    <ul class="list-none p-0 m-0 mt-2 flex flex-col gap-1">\r
                        @for (labor of draft.labor; track labor.id) {\r
                        <li class="flex justify-between gap-3"><span>{{ labor.name }} x{{ labor.quantity || 1 }}</span><strong>{{ labor.price * (labor.quantity || 1) | number: '1.2-2' }} TL</strong></li>\r
                        } @empty { <li class="text-muted-color">-</li> }\r
                    </ul>\r
                </div>\r
                <div class="py-3 border-b border-dashed border-surface">\r
                    <strong>K\u0131ymetli madenler</strong>\r
                    <ul class="list-none p-0 m-0 mt-2 flex flex-col gap-1">\r
                        @for (metal of draft.preciousMetals; track metal.id) {\r
                        <li class="flex justify-between gap-3"><span>{{ metal.type }}</span><strong>{{ metal.grams | number: '1.3-3' }} gr</strong></li>\r
                        } @empty { <li class="text-muted-color">-</li> }\r
                    </ul>\r
                </div>\r
                <div class="flex justify-between gap-3 pt-3 text-lg font-bold"><span>\u0130\u015F\xE7ilik toplam\u0131</span><span>{{ laborTotal | number: '1.2-2' }} TL</span></div>\r
            </div>\r
            <ng-template #footer>\r
                <p-button label="Kapat" text (onClick)="receiptVisible = false" />\r
                <p-button label="Fi\u015Fi yazd\u0131r" icon="pi pi-print" (onClick)="printReceipt()" />\r
            </ng-template>\r
        </p-dialog>\r
    </div>\r
</div>\r
`, styles: ["/* angular:styles/component:scss;2efd4fc7f1dc603d19c245d85c17aca41336d10b389dcc938a83f7168175235a;C:/Git/YurekliGoldFE/src/app/pages/jewelry/repair-form.ts */\n.compact-repair-page {\n  --repair-gap: 0.75rem;\n  max-width: 96rem;\n  margin-inline: auto;\n  width: 100%;\n}\n.compact-repair-page .card {\n  padding: 1rem;\n}\n.compact-repair-page .section-heading {\n  margin-bottom: 0.5rem;\n}\n.compact-repair-page .repair-group-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-color-secondary);\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.35rem 0.15rem 0;\n}\n.compact-repair-page .repair-group-card {\n  border-top: 2px solid var(--primary-color);\n}\n.compact-repair-page .option-button {\n  padding: 0.55rem 0.7rem;\n  min-height: 2.5rem;\n  line-height: 1.2;\n}\n.compact-repair-page .option-button i {\n  display: none;\n}\n.compact-repair-page .option-picker {\n  max-height: 9.5rem;\n  overflow-y: auto;\n  padding-right: 0.15rem;\n}\n.compact-repair-page .p-datatable .p-datatable-tbody > tr > td,\n.compact-repair-page .p-datatable .p-datatable-thead > tr > th {\n  padding: 0.55rem 0.65rem;\n  white-space: nowrap;\n}\n.compact-repair-page .table-scroll {\n  overflow-x: auto;\n}\n.compact-repair-page .repair-table {\n  min-width: 34rem;\n}\n.compact-repair-page .selected-list {\n  border: 1px solid var(--surface-border);\n  border-radius: 0.6rem;\n  overflow: hidden;\n}\n.compact-repair-page .selected-list-header,\n.compact-repair-page .selected-list-row {\n  display: grid;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.55rem 0.75rem;\n}\n.compact-repair-page .selected-list-header {\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.compact-repair-page .product-row,\n.compact-repair-page .product-selected-list .selected-list-header {\n  grid-template-columns: minmax(0, 1fr) 6.5rem 2.25rem;\n}\n.compact-repair-page .labor-row,\n.compact-repair-page .labor-selected-list .selected-list-header {\n  grid-template-columns: minmax(12rem, 1fr) 7rem 9rem 9rem 2.25rem;\n  min-width: 41.25rem;\n}\n.compact-repair-page .labor-selected-list {\n  overflow-x: auto;\n}\n.compact-repair-page .selected-list-row {\n  min-height: 3.25rem;\n  border-top: 1px solid var(--surface-border);\n  background: var(--surface-0);\n}\n.compact-repair-page .selected-item-name {\n  min-width: 0;\n  overflow: hidden;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.compact-repair-page .selected-list .quantity-field,\n.compact-repair-page .selected-list .price-field {\n  width: 100%;\n  min-width: 0;\n}\n.compact-repair-page .quantity-control {\n  display: grid;\n  grid-template-columns: 1.75rem minmax(2rem, 1fr) 1.75rem;\n  align-items: center;\n  width: 6.5rem;\n  overflow: hidden;\n  border: 1px solid var(--surface-border);\n  border-radius: 0.45rem;\n  background: var(--surface-0);\n}\n.compact-repair-page .quantity-button {\n  height: 2rem;\n  border: 0;\n  color: var(--text-color-secondary);\n  background: var(--surface-50);\n  cursor: pointer;\n  font-size: 1rem;\n  line-height: 1;\n}\n.compact-repair-page .quantity-button:hover {\n  color: var(--primary-color);\n  background: var(--primary-50);\n}\n.compact-repair-page .quantity-input {\n  width: 100%;\n  min-width: 0;\n  height: 2rem;\n  padding: 0 0.15rem;\n  border: 0;\n  border-right: 1px solid var(--surface-border);\n  border-left: 1px solid var(--surface-border);\n  border-radius: 0;\n  text-align: center;\n  box-shadow: none;\n}\n.compact-repair-page .quantity-input::-webkit-inner-spin-button,\n.compact-repair-page .quantity-input::-webkit-outer-spin-button {\n  margin: 0;\n  appearance: none;\n}\n.compact-repair-page .selected-total {\n  overflow: hidden;\n  text-align: right;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.compact-repair-page .selected-list-empty {\n  padding: 1rem;\n  color: var(--text-color-secondary);\n  font-size: 0.85rem;\n  text-align: center;\n}\n.compact-repair-page .quantity-field,\n.compact-repair-page .price-field,\n.compact-repair-page .metal-field {\n  display: inline-flex;\n  width: 100%;\n  min-width: 0;\n}\n.compact-repair-page .metal-label {\n  min-width: 3rem;\n}\n.compact-repair-page .summary-card {\n  align-self: start;\n}\n.compact-repair-page .summary-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid var(--surface-border);\n}\n.compact-repair-page .summary-actions .primary-actions {\n  display: grid;\n  gap: 0.5rem;\n}\n.compact-repair-page .summary-actions .secondary-actions {\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=repair-form.css.map */\n"] }]
  }], () => [{ type: RepairStateService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RepairForm, { className: "RepairForm", filePath: "src/app/pages/jewelry/repair-form.ts", lineNumber: 233 });
})();

// src/app/core/auth.guard.ts
var authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated() ? true : router.createUrlTree(["/auth/login"]);
};

// src/app.routes.ts
var appRoutes = [
  {
    path: "",
    component: AppLayout,
    canActivate: [authGuard],
    children: [
      { path: "", component: Dashboard },
      { path: "customers", component: Customers },
      { path: "users", component: Users },
      { path: "repairs/new", component: RepairForm },
      { path: "repairs", component: Repair },
      { path: "labors", component: Labors },
      { path: "uikit", loadChildren: () => import("./chunk-56QWXALC.js") },
      { path: "documentation", component: Documentation },
      { path: "pages", loadChildren: () => import("./chunk-ZV6L273B.js") }
    ]
  },
  { path: "landing", component: Landing },
  { path: "notfound", component: Notfound },
  { path: "auth", loadChildren: () => import("./chunk-D345ENCN.js") },
  { path: "**", redirectTo: "/notfound" }
];

// src/app.config.ts
var appConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }), withEnabledBlockingInitialNavigation()),
    provideHttpClient(withFetch()),
    provideZonelessChangeDetection(),
    providePrimeNG({ theme: { preset: Qr, options: { darkModeSelector: ".app-dark" } } })
  ]
};

// src/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterModule],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
