import { sameTag, SheriffConfig } from '@softarc/sheriff-core';

export const sheriffConfig: SheriffConfig = {
  version: 1,
  tagging: {
    // 'src/app/holidays/feature': ['domain:holidays', 'type:feature'],
    // 'src/app/holidays/data': ['domain:holidays', 'type:data'],
    // 'src/app/holidays/ui': ['domain:holidays', 'type:ui'],
    // 'src/app/holidays/util': ['domain:holidays', 'type:util'],
    //// ----------------------- or ---------------------------------
    // 'src/app/holidays': {
    //   feature: ['domain:holidays', 'type:feature'],
    //   data: ['domain:holidays', 'type:data'],
    //   ui: ['domain:holidays', 'type:ui'],
    //   util: ['domain:holidays', 'type:util'],
    // },
    //// ----------------------- or ---------------------------------
    // 'src/app/holidays/<type>': ['domain:holidays', 'type:<type>'],
    //// ----------------------- or ---------------------------------
    'src/app/<domain>/<type>': ['domain:<domain>', 'type:<type>'],
  },
  depRules: {
    // root: ['app:holidays', 'type:feature', 'type:data', 'shared', 'domain:*'],
    root: ['app:holidays', 'type:data', 'domain:*'],
    // 'app:holidays': ['domain:holidays', 'shared'],
    //// ----------------------- or ---------------------------------
    // 'domain:*': [({from, to}) => from === to, 'shared'],
    //// ----------------------- or ---------------------------------
    'domain:*': [sameTag, 'shared'],
  },
};
