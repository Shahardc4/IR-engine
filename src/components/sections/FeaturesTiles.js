import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'The Process',
    paragraph: 'Main steps of the process, problems and solutions.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/small indices runs.jpg')}
                      alt="Features tile icon 01"
                      width={512}
                      height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Small Index Runs
                    </h4>
                  <ul>
                    <li>We started off by creating small index of several documents containing words from the given train queries.</li>
                    <li>Afterwards we started to write the search functions in the .py file.</li>
                    <li>The functions that we wrote worked pretty well on the small indices.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/big indices runs.jpg')}
                      alt="Features tile icon 02"
                      width={512}
                      height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Big Index Runs
                    </h4>
                  <ul>
                    <li>After the runs on the small indices, we started working on building indices for the whole English Wikipedia, this is where the problems started.</li>
                    <li>We had problems of runtime and files access- In the small indices we downloaded the files that we needed for our testing manually and located them in the same place, but we now needed to access posting locations of any word, not just the training queries words.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/solutions.jpg')}
                      alt="Features tile icon 03"
                      width={512}
                      height={512} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Solutions
                    </h4>
                  <ul>
                    <li>We had to think of a way to access the files, and even after that there was a bigger problem of runtime- we had to access posting lists of every possible word and the size was way too big.</li>
                    <li>So after a lot of thinking we concluded to download locally pretty much everything we could – indices containing information regarding the documents, pagerank containing ranking of the documents and more- everything except the posting lists of all the words which was too big to save and didn’t take too long at runtime when we concluded that we can access the query’s words pl’s only. Everything worked fine and we were happy!</li>
                  </ul>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;