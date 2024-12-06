import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';

export const articleTitleResolver: ResolveFn<string> = (
  route: ActivatedRouteSnapshot
): Observable<string> =>
  of(route.paramMap.get('articleId') || 'Fuck')
