// types/inertia.d.ts
import { PageProps as InertiaPageProps } from '@inertiajs/inertia';

declare module '@inertiajs/react' {
    interface PageProps extends InertiaPageProps {
        flash?: {
            success?: string;
            error?: string;
        };
        // You can also add auth/user info here
        // auth?: {
        //   user: {
        //     id: number;
        //     name: string;
        //   };
        // };
    }
}
