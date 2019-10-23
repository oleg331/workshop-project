import { AuthGuardService } from './auth-guard.service';

class MockRouter {
  navigate(path: string) {}
}

describe('AuthGuardService', () => {

  beforeEach(() => {
    describe('canActivate', () => {
      let authGuardService: AuthGuardService;
      let authService;
      let router;

      it('should return true for a logged in user', () => {
        authService = { isAuthenticated: () => true };
        router = new MockRouter();
        authGuardService = new AuthGuardService(authService, router);

        expect(authGuardService.canActivate()).toEqual(true);
      });

      it('should navigate to home for a logged out user', () => {
        authService = { isAuthenticated: () => false };
        router = new MockRouter();
        authGuardService = new AuthGuardService(authService, router);
        spyOn(router, 'navigate');

        expect(authGuardService.canActivate()).toEqual(false);
        expect(router.navigate).toHaveBeenCalledWith(['auth']);
      });
    });
  });
});
