# Changelog

## 2.3.0

-  update Storefront UI version ([#5437](https://github.com/vuestorefront/vue-storefront/pull/5437/files)) - [Justyna Gieracka](https://github.com/justyna-13)
,
- [BREAKING] update Storefront UI version ([#5691](https://github.com/vuestorefront/vue-storefront/issues/5691)) - [Justyna Gieracka](https://github.com/justyna-13)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
toggleCategoryGridView | changeToCategoryGridView, changeToCategoryListView | toggleCategoryGridView has been divided into two functions: changeToCategoryGridView and changeToCategoryListView | /composables/useUiState.ts,
- [BREAKING] mocked results for search ([#5709](https://github.com/vuestorefront/vue-storefront/pull/5709/files)) - [Justyna Gieracka](https://github.com/justyna-13)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
term | phrase | term is changed to phrase | acomposables/useUiHelpers/index.ts ,
-  added SfLoader to VsfShippingProvider to correctly handle loading state ([#5725](https://github.com/vuestorefront/vue-storefront/issues/5725)) - [Baroshem](https://github.com/baroshem)
,
-  Fix hydration bug on category page ([#5744](https://github.com/vuestorefront/vue-storefront/issues/5744)) - [Adam Pawliński](https://github.com/AdamPawlinski)
,
-  customQuery support for user billing/shipping ([#5746](https://github.com/vuestorefront/vue-storefront/pull/5781)) - [vn-vlad](https://github.com/vn-vlad)
,
- [BREAKING] Pass integration configuration to 'extendApp' ([#5774](https://github.com/vuestorefront/vue-storefront/pull/5774)) - [Filip Sobol](https://github.com/filipsobol)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
`extendApp` accepted only Express.js app as a parameter: `extendApp(app)` | `extendApp` accepts object containing `app` and `configuration` properties: `extendApp({ app, configuration })` | Allow access to integration configuration when extending application. | @vue-storefront/middleware,
-  added missing class for text button ([#5827](https://github.com/vuestorefront/vue-storefront/issues/5827)) - [Justyna Gieracka](https://github.com/justyna-13)
,
-  add _key to enhanceProduct ([#5829](https://github.com/vuestorefront/vue-storefront/issues/5829)) - [Baroshem](https://github.com/baroshem)
,
-  add functionality to search products by ids ([#5847](https://github.com/vuestorefront/vue-storefront/issues/5847)) - [Baroshem](https://github.com/baroshem)


## 2.3.0-rc.3

-  Fix VsfShippingProvider to correctly show errors related to no shipping methods available for certain country ([#5463](https://github.com/vuestorefront/vue-storefront/issues/5463)) - [Baroshem](https://github.com/Baroshem)
,
- [BREAKING] Fix infinite loading for login and register by implementing error handling in core module and in LoginModal ([#5508](https://github.com/vuestorefront/vue-storefront/issues/5508)) - [Baroshem](https://github.com/Baroshem)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
There was no error handling and thats why the infinite loading was appearing | Errors are handled immediately | add try/catch to middleware, set more appriopriate value to err.value in useUserFactory, and implement error handling in LoginModal | core/middleware, LoginModal,
-  revert change https://github.com/vuestorefront/vue-storefront/pull/5593 as it was breaking the mobile view after latest release ([#5514_1](https://github.com/vuestorefront/vue-storefront/issues/5514)) - [Baroshem](https://github.com/Baroshem)
,
-  removed helpers/filters from @vue-storefront/nuxt-theme and @vue-storefront/commercetools-theme because they are useless now ([#5620](https://github.com/vuestorefront/vue-storefront/issues/5620)) - [Kacper Małkowski](https://github.com/porithe/)
,
-  add error handling for GraphQL queries with complexity over limit ([#5692](https://github.com/vuestorefront/vue-storefront/issues/5692)) - [Baroshem](https://github.com/Baroshem)
,
-  extend #5692 thrown error to fix also this issue ([#5693](https://github.com/vuestorefront/vue-storefront/issues/5693)) - [Baroshem](https://github.com/Baroshem)
,
-  Add ability to access express instance in the middleware extensions ([#5714](https://github.com/vuestorefront/vue-storefront/pull/5714)) - [andrzejewsky](https://github.com/andrzejewsky)


## 2.3.0-rc.2

-  added MegaMenu to theme ([#5267](https://github.com/vuestorefront/vue-storefront/issues/5267)) - [Łukasz Jędrasik](https://github.com/lukaszjedrasik)
,
- [BREAKING] Implementation of api middleware ([#5361](https://github.com/vuestorefront/vue-storefront/pull/5361)) - [Patryk Andrzejewski](https://github.com/andrzejewsky)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
apiClientFactory | apiClientFactory | Api client factory is being called only on our middleware. It is no longer supported in the borwser. For client-side interaction please use proxied version | core,
-  added useUiNotification composable ([#5363](https://github.com/vuestorefront/vue-storefront/issues/5363)) - [Łukasz Jędrasik](https://github.com/lukaszjedrasik)
,
-  Moved dependencies from integration themes to nuxt-theme-module ([#5404](https://github.com/vuestorefront/vue-storefront/issues/5404)) - [Łukasz Jędrasik](https://github.com/lukaszjedrasik)
,
- [BREAKING] New part of checkout - shipping details, inside core and commercetools ([#5419](https://github.com/vuestorefront/vue-storefront/pull/5552)) - [Fifciu](https://github.com/Fifciu)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
Using checkoutGetters | Removed checkoutGetters | Accesing checkout-related properties directly | core,
CartPreview.vue uses checkoutGetters | CartPreview.vue is implemented per integration as we do not use getters for checkout-related stuff | We have to implement CartPreview component per integration | nuxt-theme-module,
- [BREAKING] Added `is-authenticated` middleware to protect user profile routes from guest access. By default it emits an error message asking to implement vendor-specific validation. ([#5442_1](https://github.com/vuestorefront/vue-storefront/pull/5442)) - [Filip Sobol](https://github.com/filipsobol)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
- | [Link](https://docs.vuestorefront.io/v2/integrate/integration-guide.html#creating-a-middleware) | Create new middleware that checks if customer is logged in, and if not, redirects to homepage. | middleware/is-authenticated.js,
-  Updated the default logger to use matching console log levels, like debug, info, warn, error. ([#5442_2](https://github.com/vuestorefront/vue-storefront/pull/5442)) - [Filip Sobol](https://github.com/filipsobol)
,
-  Improvements for api middleware ([#5500](https://github.com/vuestorefront/vue-storefront/pull/5500)) - [Patryk Andrzejewski](https://github.com/andrzejewsky)
,
-  Categories loader overlaping footer fixed ([#5507](https://github.com/vuestorefront/vue-storefront/issues/5507)) - [Justyna Gieracka](https://github.com/justyna-13)
,
- [BREAKING] Unify case of theme's directories ([#5511](https://github.com/vuestorefront/vue-storefront/issues/5511)) - [Fifciu](https://github.com/Fifciu)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
pages/Checkout.vue imported components from ~/components/checkout | pages/Checkout.vue imports components from ~/components/Checkout | Nested directories should be in PascalCase. Remember to update imports | nuxt-theme-module,
pages/Checkout.vue imported components from ~/components/checkout | pages/Checkout.vue imports components from ~/components/Checkout | Nested directories should be in PascalCase. Remember to update imports | commercetools-theme,
-  removed overflow-x: hidden from html tag ([#5514](https://github.com/vuestorefront/vue-storefront/issues/5514)) - [Przemysław Rakowski](https://github.com/RakowskiPrzemyslaw)
,
- [BREAKING] Update Cache library ([#5524](https://github.com/vuestorefront/vue-storefront/pull/5524)) - [Filip Sobol](https://github.com/filipsobol)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
- | - | Please see "Advanced > SSR Cache" and "Build integration > Cache drive" pages in the documentation for more information. | @vue-storefront/cache,
-  Add typings for middleware ([#5530](https://github.com/vuestorefront/vue-storefront/pull/5530)) - [Patryk Andrzejewski](https://github.com/andrzejewsky)
,
- [BREAKING] New part of checkout - useBillingFactory, inside core ([#5552](https://github.com/vuestorefront/vue-storefront/pull/5552)) - [Fifciu](https://github.com/Fifciu)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
Integrations implement useCheckout | Integrations implement useBilling | New factories dedicated for the checkout | core,
-  Added 'CartPreview.vue' components to 'components/Checkout' directory asking for integration-specific implementation. ([#5561](https://github.com/vuestorefront/vue-storefront/pull/5561)) - [Filip Sobol](https://github.com/filipsobol)
,
- [BREAKING] Quick search ([#5566](https://github.com/vuestorefront/vue-storefront/issues/5566)) - [Justyna Gieracka](https://github.com/justyna-13)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
{ changeSearchTerm } = useUiHelpers() | { setTermForUrl } = useUiHelpers(); | Changed changeSearchTerm name to setTermForUrl | useUiHelpers/index.ts,
 | { getSearchTermFromUrl } = useUiHelpers(); | Created new function | useUiHelpers/index.ts,
 | SearchResults.vue | Added new 'SearchResults.vue' component | @vue-storefront/nuxt-theme,
AppHeader.vue | AppHeader.vue | Modified 'AppHeader.vue' to add use new 'SearchResults.vue' component | @vue-storefront/nuxt-theme,
- [BREAKING] Implementation of api middleware ([#5577](https://github.com/vuestorefront/vue-storefront/pull/5577)) - [Patryk Andrzejewski](https://github.com/andrzejewsky)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
customQuery was used as a function | customQuery is a key-value object | The key is a query name, value is the name of a new query function, defined in the middleware config | core,
- [BREAKING] Add 'useMakeOrder' and rename composable 'useUserOrders' to 'useUserOrder' ([#5584](https://github.com/vuestorefront/vue-storefront/pull/5584)) - [Filip Sobol](https://github.com/filipsobol)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
useUserOrders | useUserOrder | Renamed composable 'useUserOrders' to 'useUserOrder'. | core and commercetools,
'placeOrder' from 'useCheckout' composable was used to place new orders. | Added new 'useMakeOrder' composable and used it's 'make' function to place new orders. | Use new 'useMakeOrder' composable to place orders. | core and commercetools,
- [BREAKING] New Payment API for Checkout ([#5587](https://github.com/vuestorefront/vue-storefront/pull/5587)) - [Fifciu](https://github.com/Fifciu)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
Dedicated composable for whole checkout | Dedicated composable for Shipping, Billing and Provider components | undefined | core,
- [BREAKING] fix naming convention for isOnCart and isOnWishlist to isInCart and isInWishlist ([#5592](https://github.com/vuestorefront/vue-storefront/issues/5592)) - [Jakub Andrzejewski](https://github.com/Baroshem)

| Before | After | Comment | Module 
| ------ | ----- | ------ | ------
variables and methods had names isOnCart and isOnWishlist | variables and methods have names isInCart and isInWishlist | fix naming convention for isOnCart and isOnWishlist to isInCart and isInWishlist | useCart/useWishlist,
-  Fix outside click handler for app header search ([#5595](https://github.com/vuestorefront/vue-storefront/pull/5595)) - [Patryk Andrzejewski](https://github.com/andrzejewsky)
,
-  save method for useShippingProvider, deprecated field ShippingMethod.description switched to ShippingMethod.localizedDescription, fixed cart getter for counting totals ([#5598](https://github.com/vuestorefront/vue-storefront/pull/5598)) - [Fifciu](https://github.com/Fifciu)
,
-  state field in useShippingProvider instead of response, setState method ([#5624](https://github.com/vuestorefront/vue-storefront/pull/5624)) - [Fifciu](https://github.com/Fifciu)
,
-  Make "ejs" a production dependency ([#5630](https://github.com/vuestorefront/vue-storefront/pull/5630)) - [Filip Sobol](https://github.com/filipsobol)
,
-  Fix for error states reactivity in core factories and example of watching errors in docs ([#5654](https://github.com/vuestorefront/vue-storefront/pull/5654)) - [Fifciu](https://github.com/Fifciu)
,
-  Properly parse module options by using "<%= serialize(options) %>" instead of "JSON.parse('<%= JSON.stringify(options) %>')" ([#5664](https://github.com/vuestorefront/vue-storefront/pull/5664)) - [Filip Sobol](https://github.com/filipsobol)
,
-  Lazy hydrating sidebar on category's view when idle not when visible, so it works properly with EE useFacet ([#5667](https://github.com/vuestorefront/vue-storefront/pull/5667)) - [Fifciu](https://github.com/Fifciu)



# 2.2.3
- fix register function from CT useUser composable allows user to log in [#5613](https://github.com/vuestorefront/vue-storefront/issues/5613)

# 2.2.1
- fixed `vue-lazy-hydration` dependency in `nuxt-theme-module` and improved typings in Boilerplate ([#5403](https://github.com/DivanteLtd/vue-storefront/issues/5403))

## 2.2.0
- added bottom margin to fix visibility of last footer category ([#5253](https://github.com/DivanteLtd/vue-storefront/issues/5253))
- [BREAKING] refactored names of many factory methods and composable methods, details in linked PR ([#5299](https://github.com/DivanteLtd/vue-storefront/pull/5299))
- [BREAKING] changed signatures of factory methods to always 2 arguments, details in linked PR ([#5299](https://github.com/DivanteLtd/vue-storefront/pull/5299))
- [BREAKING] composables are always returning one field for the response, removed `totalOrders` and `totalProducts`, `useCartFactory` and `useUserFactory` are returning only composables ([#5330](https://github.com/vuestorefront/vue-storefront/pull/5330))
- [BREAKING] update composables in Boilerplate to match new factories signatures ([#5389](https://github.com/DivanteLtd/vue-storefront/pull/5389))
- removed `formatPrice` from `useUiHelpers`, replaced by vue18n `$n` function ([#5339](https://github.com/vuestorefront/vue-storefront/pull/5339))
- updated integration boilerplate to work with refactored names of factories mentioned above ([#5348](https://github.com/DivanteLtd/vue-storefront/pull/5348))
- change `useUserBillingFactory`, `useUserShippingFactory` and `useWishlistFactory` to return composable, move `setWishlist` inside of composable ([5350](https://github.com/vuestorefront/vue-storefront/pull/5350))
- optimize loading of fonts and their stylesheets from Google Fonts and introduce lazy hydration to improve performance ([#5326](https://github.com/DivanteLtd/vue-storefront/pull/5326))
- added missing `i18n` tags ([#5337](https://github.com/vuestorefront/vue-storefront/issues/5337))
- fix adding to cart button on product page ([#5375](https://github.com/vuestorefront/vue-storefront/pull/5375))
- typed error ref for each core's factory ([#4956](https://github.com/vuestorefront/vue-storefront/issues/4956))
- added ID to Loggers in core factories ([#5351](https://github.com/vuestorefront/vue-storefront/issues/5351))
- script for changelog generation for core ([#5256](https://github.com/DivanteLtd/vue-storefront/issues/5256))

## 2.1.1-rc.1
- updated version of nuxt composition-api

## 2.1.0-rc.1
- removed `availableFilters` and `availableSortingOptions` from `useProduct` ([#4856](https://github.com/DivanteLtd/vue-storefront/issues/4856))
- removed `@import "~@storefront-ui/vue/styles";` from all components, because SFUI variables and mixins are now available globally and imports will drastically increase bundle size ([#5195](https://github.com/DivanteLtd/vue-storefront/issues/5195))
- added new performance options to `@vue-storefront/nuxt` package ([#5195](https://github.com/DivanteLtd/vue-storefront/issues/5195))
- open active category and highlight current subcategory on the Category page ([#5244](https://github.com/DivanteLtd/vue-storefront/issues/5244))
- added missing order getter to get item price ([#5231](https://github.com/DivanteLtd/vue-storefront/issues/5231))
- changed default logging level to 'warn' and 'error' in development and production mode respectively ([#5304](https://github.com/DivanteLtd/vue-storefront/issues/5304))
- fixed broken focus in login form ([#5273](https://github.com/DivanteLtd/vue-storefront/issues/5273))
- fixed select for changing variant on product page ([#5281](https://github.com/DivanteLtd/vue-storefront/issues/5281))
- fixed checkboxes in filters sidebar are not clickable on mobile ([#5246](https://github.com/DivanteLtd/vue-storefront/pull/5246))
- fixed no option to close a login modal ([#5243](https://github.com/DivanteLtd/vue-storefront/pull/5243))
- fixed category page for mobile ([#5238](https://github.com/DivanteLtd/vue-storefront/pull/5238))
- fixed issue with CSS waterfall ([#5229](https://github.com/DivanteLtd/vue-storefront/pull/5229))
- added support for HTTP/2 push for JS assets ([#5179](https://github.com/DivanteLtd/vue-storefront/pull/5179))
- added discounts api getter ([#5154](https://github.com/DivanteLtd/vue-storefront/pull/5154))
- added context implementation ([#5218](https://github.com/DivanteLtd/vue-storefront/pull/5218))
- added context typings ([5290](https://github.com/DivanteLtd/vue-storefront/pull/5290))

## 2.0.12

- fix ssr implementation, transition on client-side ([#5103](https://github.com/DivanteLtd/vue-storefront/pull/5103))

## 2.0.11

- fixed SSR in useWishlistFactory ([#5076](https://github.com/DivanteLtd/vue-storefront/issues/5076))
- added `components/MyAccount/BillingAddressForm.vue` and `components/UserBillingAddress.vue` components for vendor-specific address formats ([#5069](https://github.com/DivanteLtd/vue-storefront/issues/5069))

## 2.0.10

- added `useContent` and `renderContent` ([#4848](https://github.com/DivanteLtd/vue-storefront/issues/4848))
- added `useUiState` composable instead `ui-state.ts` ([#4876](https://github.com/DivanteLtd/vue-storefront/issues/4876))
- added `components/MyAccount/ShippingAddressForm.vue` and `components/UserShippingAddress.vue` components for vendor-specific address formats ([#5032](https://github.com/DivanteLtd/vue-storefront/issues/5032))
- added `getStreetNumber`, `getId`, `getApartmentNumber` and `isDefault` to `shippingGetters` ([#5032](https://github.com/DivanteLtd/vue-storefront/issues/5032))
- support for customQuery in `loadWishlist`, `removeFromWishlist` and `addToWishlist` from useWishlistFactory ([#5059](https://github.com/DivanteLtd/vue-storefront/issues/5059))

## 2.0.9

- added `getEmailAddress` getter to `userGetters` ([#4939](https://github.com/DivanteLtd/vue-storefront/pull/4939))
- added `getTotalReviews` and `getAverageRating` to `productGetters` ([#4958](https://github.com/DivanteLtd/vue-storefront/issues/4958))
- fix ssr transitions
- updated UseUserShipping & UserShippingGetters interfaces, implemented them in useUserShippingFactory, written & updated tests ([#4841](https://github.com/DivanteLtd/vue-storefront/issues/4841))
- fix `sharedRef` nullable assigning

## 2.0.8

- renamed `refreshUser` to `load` in `useUser`, user shouldn't be automatically loaded now [#4917](https://github.com/DivanteLtd/vue-storefront/pull/4917)
- implementing logger feature [#4911](https://github.com/DivanteLtd/vue-storefront/pull/4911)
- fixed cart hydration issues [#4942](https://github.com/DivanteLtd/vue-storefront/pull/4942)

## 2.0.6

- renamed useReviews factory to useReview [#4800](https://github.com/DivanteLtd/vue-storefront/pull/4800)
- added useUserBillingFactory and useUserShippingFactory factory [#4809](https://github.com/DivanteLtd/vue-storefront/pull/4809)

## 2.0.5

- added useReviews factory [#4775](https://github.com/DivanteLtd/vue-storefront/pull/4775)
- refactored apiClientFactory [#4777](https://github.com/DivanteLtd/vue-storefront/pull/4777)
- removed useLocale types [#4777](https://github.com/DivanteLtd/vue-storefront/pull/4777)
- created useFacet factory and types [#4853](https://github.com/DivanteLtd/vue-storefront/pull/4853)
