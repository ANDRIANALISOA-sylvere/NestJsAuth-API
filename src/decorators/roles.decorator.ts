import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enums/roles.enum';

export const Roles = (...roles: Role[]) => SetMetadata('roles', roles);
