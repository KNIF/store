import { createToaster } from '@chakra-ui/react';

export const toaster = createToaster({
  placement: 'top',
  pauseOnPageIdle: true,
});

export const toasterBottomRight = createToaster({
  placement: 'bottom-end',
  pauseOnPageIdle: true,
});
