import AddCoach from '~/pages/InlineSkateModule/AddCoach';
import AddTrainee from '~/pages/InlineSkateModule/AddTrainee';
import CoachList from '~/pages/InlineSkateModule/CoachList';
import TraineeList from '~/pages/InlineSkateModule/TraineeList';

const InlineSkateModuleRouter = [
  {
    name: 'CoachList',
    component: CoachList,
    options: {
      title: '教练列表',
    },
  },
  {
    name: 'TraineeList',
    component: TraineeList,
    options: {
      title: '学员列表',
    },
  },
  {
    name: 'AddCoach',
    component: AddCoach,
    options: {
      title: '新增教练员',
    },
  },
  {
    name: 'AddTrainee',
    component: AddTrainee,
    options: {
      title: '新增学员',
    },
  },
];

export default InlineSkateModuleRouter;
