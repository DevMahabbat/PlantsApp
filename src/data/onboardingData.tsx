
interface OnboardingItemData {
    id: string;
    title: string;
    description: string;
    image: any;
}

const onboardingData: OnboardingItemData[] = [
    {
        id: '1',
        title: 'Welcome!',
        description: 'we’re glad that that you are here',
        image: require('../../assets/images/plantonb.png'), // Replace with the actual image path
    },
    {
        id: '2',
        title: 'Discover Your Type Of Plant',
        description: 'Tips and Tricks to grow a healthy plant',
        image: require('../../assets/images/plant2.png'), // Replace with the actual image path
    },
    {
        id: '3',
        title: 'Connect With Other Plant Lovers',
        description: 'Join A Community',
        image: require('../../assets/images/plantonb2.png'), // Replace with the actual image path
    },
];

export default onboardingData