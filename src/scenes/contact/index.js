import React, { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Linking, View } from 'react-native';
import Text from '../../components/MyText';
import { colors } from '../../utils/colors';
import logEvents from '../../services/logEvents';
import BackButton from '../../components/BackButton';
import InfoSvg from '../../../assets/svg/info.svg';

const Contact = ({ navigation }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);


  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', (e) => {
      logEvents.logContactOpen();
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.safe}>
      <BackButton onPress={navigation.goBack} />
      <ScrollView
        style={styles.cgu}
        contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Pour simplement parler à quelqu’un :</Text>
        <Text style={styles.content}>
          Numéro national de prévention du suicide, Gratuit, 24h/24 et 7j/7
          {'\n\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick(
                'Numéro national de prévention du suicide',
              );
              Linking.openURL('tel:3114');
            }}>
            3114
          </Text>
          {'\n\n\n'}
          SOS-amitiés, 24h/24 et 7j/7{'\n\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('SOS-amitiés');
              Linking.openURL('tel:09 72 39 40 50');
            }}>
            09 72 39 40 50
          </Text>
          {'\n\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('SOS-amitiés');
              Linking.openURL('tel:01 40 09 15 22');
            }}>
            01 40 09 15 22
          </Text>
          {'\n\n\n'}
          Fil Santé Jeune, Tous les jours, 9h-23h {'\n\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('SOS-amitiés');
              Linking.openURL('tel:0 800 235 236');
            }}>
            0 800 235 236
          </Text>
        </Text>
        <View style={styles.containerInfos}>
          <InfoSvg />
          <View paddingLeft={10} style={styles.textContainer}>
            <Text style={styles.titleInfos}>
              Les troubles psychiatriques se soignent
            </Text>
            {isFullScreen ? (
              <>
                <Text style={styles.explanation}>
                  Quand on a un doute, quand on se pose la question, c’est
                  toujours une bonne idée de consulter un professionnel de
                  santé, qui saura nous informer et nous orienter.{'\n\n'}
                  La santé mentale est une composante de la santé. Prendre soin
                  de soi passe aussi par le fait de prendre soin de sa santé
                  mentale.
                  {'\n'}
                  Il arrive qu’à certains moments de la vie, on se sente moins
                  bien psychiquement. Notre santé mentale est alors moins bonne
                  et l’on peut présenter un trouble psychiatrique. Les troubles
                  psychiatriques sont très fréquents, ils peuvent toucher
                  n’importe qui à n’importe quel moment de la vie, surtout quand
                  on se retrouve dans des situations difficiles.{'\n\n'} Le fait
                  d’avoir un trouble psychiatrique n’a aucun rapport avec une
                  quelconque faiblesse ou manque de volonté. C’est juste que
                  parfois, pour pleins de raisons différentes, notre santé
                  mentale est moins bonne, comme n’importe quelle autre
                  composante de notre santé.
                  {'\n'} Les troubles psychiatriques se soignent, encore plus
                  s’ils sont pris en charge rapidement. Quand on a un doute,
                  quand on se pose la question, c’est toujours une bonne idée de
                  consulter un professionnel de santé, qui saura nous informer
                  et nous orienter.
                </Text>
                <Text style={styles.lessButton} onPress={() => setIsFullScreen(e => !e)}>
                  Reduire
                </Text>
              </>
            ) : (
              <>
                <Text numberOfLines={5} style={styles.explanation}>
                  Quand on a un doute, quand on se pose la question, c’est
                  toujours une bonne idée de consulter un professionnel de
                  santé, qui saura nous informer et nous orienter.
                </Text>
                <Text style={styles.moreButton} onPress={() => setIsFullScreen(e => !e)}>
                  Afficher la suite
                </Text>
              </>
            )}
          </View>
        </View>
        <Text style={styles.content}>
          La santé mentale, qu’est-ce que c’est ?{'\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('en_savoir_plus_mentale');
              Linking.openURL(
                'https://www.psycom.org/comprendre/la-sante-mentale/on-a-toutes-et-tous-une-sante-mentale/',
              );
            }}>
            en savoir plus
          </Text>
          {'\n\n'}
          Avoir un trouble psychiatrique, c’est fréquent ? 1 personne sur 4
          souffre de troubles mentaux{'\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('article_OMS');
              Linking.openURL(
                'https://www.who.int/whr/2001/media_centre/press_release/fr/',
              );
            }}>
            Article de l'OMS
          </Text>
          {'\n\n'}
          On a tous besoin d'aide à un moment ou un autre de notre vie.{'\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('voir_un_psy');
              Linking.openURL('https://pasapas-jeunes.com/j-ai-besoin-d-aide');
            }}>
            C’est grave d’aller voir un psy ?{' '}
          </Text>
          {'\n\n'}
          Quels sont les différents troubles psy ?{'\n'}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('en_savoir_plus_troubles');
              Linking.openURL(
                'https://www.psycom.org/comprendre/la-sante-mentale/les-troubles-psy/',
              );
            }}>
            en savoir plus
          </Text>
          {'\n\n'}
          Je voudrais des informations sur les traitement médicamenteux :{' '}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('reseau_pic');
              Linking.openURL(
                'http://www.reseau-pic.info/?dest=fiches/nom.php',
              );
            }}>
            reseau-pic.com{' '}
          </Text>
          {'\n\n'}
          Je suis étudiant et j'aimerais consulter gratuitement un psychologue :{' '}
          <Text
            style={styles.link}
            onPress={() => {
              logEvents.logInfoClick('reseau_pic');
              Linking.openURL('https://santepsy.etudiant.gouv.fr/');
            }}>
            santepsy.etudiant.gouv.fr{' '}
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerInfos: {
    backgroundColor: 'rgba(38,56,124, 0.03)',
    borderRadius: 10,
    borderWidth: 0,
    paddingTop: 25,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 40,
  },
  lessButton: {
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: colors.BLUE,
    paddingTop: 10,
  },
  moreButton: {
    fontWeight: '700',
    textDecorationLine: 'underline',
    color: colors.BLUE,
    paddingTop: 10,
  },
  safe: {
    flex: 1,
  },
  title: {
    color: colors.BLUE,
    fontSize: 20,
    padding: 20,
    fontWeight: '700',
  },
  cgu: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  content: {
    color: colors.DARK_BLUE,
    padding: 10,
    fontSize: 16,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    margin: 100,
    color: colors.LIGHT_BLUE,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
});

export default Contact;