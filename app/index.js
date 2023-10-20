import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Skill from "../components/skill";
import Heading from "../components/heading";
import { useLocalSearchParams, Link, useNavigation } from 'expo-router';

export const skills = [
  {
    id: 'wordpress',
    title: 'WordPress',
    shortDescription: 'E-Commerce Website Designs',
    icon: 'wordpress',
    color: '#096484',
    link: 'wordpress',
    description: `Design online stores and educational websites that are user friendly. Enhance Search Engine Optimization`,
    dependent: 'Fontisto',

  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    shortDescription: 'iOS & Android Development',
    icon: 'react',
    link: 'frontend',
    color: '#61dbfb',
    description: '',
    dependent: 'Fontisto',

  },
  {
    id: 'database',
    title: 'Database',
    shortDescription: 'MongoDB',
    icon: 'mongodb',
    color: '#4db33d',
    link: 'backend',
    description: '',
    dependent: 'Fontisto',
  },
  {
    id: 'ios',
    title: 'iOS',
    shortDescription: 'iOS',
    dependent: 'Ionicons',
    description: 'iOS',
    icon: 'ios-logo-apple-appstore',
    color: '#555555',
  },
  {
    id: 'android',
    title: 'Android',
    shortDescription: 'Android',
    dependent: 'Ionicons',
    description: 'Android',
    icon: 'logo-android',
    color: '#78C257',
  },
  {
    id: 'html',
    title: 'HTML',
    shortDescription: 'HTML',
    dependent: 'Fontisto',
    description: 'HTML',
    icon: 'html5',
    color: 'black',
  },
  {
    id: 'css',
    title: 'CSS',
    shortDescription: 'CSS',
    dependent: 'Fontisto',
    description: 'CSS',
    icon: 'css3',
    color: 'black',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    shortDescription: 'JavaScript',
    dependent: 'Ionicons',
    description: 'JavaScript',
    icon: 'logo-javascript',
    color: 'black',
  },
];

const iconList = [
  {
    id: '1',
    dependent: 'Fontisto',
    description: 'MongoDB',
    icon: 'mongodb',
    color: '#4db33d',
  },
  {
    id: '2',
    dependent: 'Fontisto',
    description: 'React',
    icon: 'react',
    color: '#61dbfb',
  },
  {
    id: '3',
    dependent: 'Fontisto',
    description: 'WordPress',
    icon: 'wordpress',
    color: '#096484',
  },
  {
    id: '4',
    dependent: 'Fontisto',
    description: 'HTML',
    icon: 'html5',
    color: 'black',
  },
  {
    id: '5',
    dependent: 'Fontisto',
    description: 'CSS',
    icon: 'css3',
    color: 'black',
  },
  {
    id: '6',
    dependent: 'Ionicons',
    description: 'JavaScript',
    icon: 'logo-javascript',
    color: 'black',
  },
  {
    id: '7',
    dependent: 'Ionicons',
    description: 'iOS',
    icon: 'logo-javascript',
    color: 'black',
  }
]
const mission = {
  id: '1',
  heading: 'The Mission',
  paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I want to help project owners meet their marketing and advertising needs through web and mobile app development. I also enjoy giving back to my community through organizing charity events using my project management skills.`,
  image: '',
  summary: ``,
};

const about = [

  {
    id: '1',
    heading: 'E-Commerce Website Design',
    paragraph: `Creative website designs bring joy to website and app users across the globe. My goal is to share my creativity with users who need the projects I help to inspire and design. I want to help project owners meet their marketing and advertising needs through web and mobile app development.`,
    image: '',
    summary: ``,
  }
];
export default function Page() {

  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', }}>Curtis Shepard</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: 'orange', }}>Web Developer</Text>
          <View
            style={{
              margin: 5,
            }}>
            <Text style={{ fontSize: 18.72, fontWeight: 'bold', }}>{mission.heading}</Text>
            <Text style={{ fontSize: 16 }}>{mission.paragraph}</Text>
          </View>

          <Text style={{ fontSize:24, fontWeight: 'bold',  color:'orange',}}>Website & App Development Skills</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            
            {
              skills.map((i, id) => (
                <View style={{ flexDirection: 'row' }} key={id}>

                  <Skill
                    id={i.id}
                    image={i.image}
                    color={i.color}
                    icon={i.icon}
                    title={i.title}
                    description={i.description}
                    shortDescription={i.shortDescription}
                    link={i.link}
                    dependent={i.dependent} />
                </View>
              ))
            }
          </ScrollView>

          <Text style={{ fontSize:24, fontWeight: 'bold', color:'orange', }}>Web Development Experience</Text>
            
          {
            about.map((about, index) => (
              <View key={index}
                style={{
                  margin: 5,
                }}>
                <Text style={{ fontSize: 18.72, fontWeight: 'bold',}}>{about.heading}</Text>

                <Text style={{ fontSize: 16 }}>{about.paragraph}</Text>
                <Image />
                <Text>{about.summary}</Text>
              </View>
            ))
          }


        </View >
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});
