import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { jwtConstants } from './constants';
import { Injectable } from '@nestjs/common';
import { VerifiedCallback } from 'passport-jwt';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID: jwtConstants.google_client_id as string,
      clientSecret: jwtConstants.google_client_secret as string,
      callbackURL: jwtConstants.callbackURL,
      scope: ['profile', 'email'],
    });
  }
  validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifiedCallback,
  ) {
    const { id, displayName, emails } = profile;

    const user = {
      id,
      name: displayName,
      email: emails[0].value,
      accessToken,
    };

    done(null, user);
  }
}
