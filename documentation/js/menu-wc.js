'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">blog-api documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' : 'data-target="#xs-controllers-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' :
                                            'id="xs-controllers-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' : 'data-target="#xs-injectables-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' :
                                        'id="xs-injectables-links-module-AuthModule-efef34e6cbf1243b6db201c88da701fb2f1d5d2782612f1a039662434c081ac6b3d9d9ce7417a796c3f949132c61f832920c3a7e974e663300c9b244df316f85"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoriesModule.html" data-type="entity-link" >CategoriesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' : 'data-target="#xs-controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' :
                                            'id="xs-controllers-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                            <li class="link">
                                                <a href="controllers/CategoriesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' : 'data-target="#xs-injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' :
                                        'id="xs-injectables-links-module-CategoriesModule-4cea64a0f61d3b040ec010bb60f2af8447f769a78f6abedda94c4e79963f9bd1bedef19c14ec1718b3ac69a7282e1c1e278d7f09cf49537f85bcd72cf895d17c"' }>
                                        <li class="link">
                                            <a href="injectables/CategoriesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoriesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostsModule.html" data-type="entity-link" >PostsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' : 'data-target="#xs-controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' :
                                            'id="xs-controllers-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                            <li class="link">
                                                <a href="controllers/PostsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' : 'data-target="#xs-injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' :
                                        'id="xs-injectables-links-module-PostsModule-a6f1b5c1f0af7655cfdbd07b734075ea03e12d19c2fef56f4759f9b1a6a91b5bcc0ba6e9e8cb26c7b221517984ce8b15359061fa026334599e1dad55a7e5a5b6"' }>
                                        <li class="link">
                                            <a href="injectables/PostsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' : 'data-target="#xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' :
                                        'id="xs-injectables-links-module-PrismaModule-7ec46d5213648d6af195ca52dfa87b1c4755e5bf4d88e606af4a6f96fffe160393eacdce8d2a5e5c86609ba2e65e54573d9bd60b03145287dbc37bed02a6aff4"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' : 'data-target="#xs-controllers-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' :
                                            'id="xs-controllers-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' : 'data-target="#xs-injectables-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' :
                                        'id="xs-injectables-links-module-UsersModule-a2d646ca4768437ccb08751783101ba02cf0415d582861199b678cfc5c4a2f49096fc3b69df20f9801657216447406752f57772a631f8418147c13dec758a8af"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CategoriesController.html" data-type="entity-link" >CategoriesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostsController.html" data-type="entity-link" >PostsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateCategoryDto.html" data-type="entity-link" >CreateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostDto.html" data-type="entity-link" >CreatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginUserDto.html" data-type="entity-link" >LoginUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCategoryDto.html" data-type="entity-link" >UpdateCategoryDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePostDto.html" data-type="entity-link" >UpdatePostDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoriesService.html" data-type="entity-link" >CategoriesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostsService.html" data-type="entity-link" >PostsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtGuard.html" data-type="entity-link" >JwtGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ExpressSwaggerCustomOptions.html" data-type="entity-link" >ExpressSwaggerCustomOptions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});