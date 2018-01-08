import React from 'react';
import {
  List,
  InfiniteLoader,
  AutoSizer,
  CellMeasurerCache,
  CellMeasurer
} from 'react-virtualized';
import PhotoFeedItem from './photo_feed_item';
import Spinner from '../spinner/spinner';


class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);

    this.cache = new CellMeasurerCache({
      defaultHeight: 720,
      fixedWidth: true,
    });
  }

  componentDidMount() {
    this.props.loadNextPage({ startIndex: 1 });
  }

  render() {
    const {
      photos,
      hasNextPage,
      isFetchingNextPage,
      loadNextPage,
    } = this.props;

    const rowCount = hasNextPage
      ? photos.length + 1
      : photos.length;

    const loadMoreRows = isFetchingNextPage
      ? () => {}
      : loadNextPage;

    const isRowLoaded = ({
      index
    }) => !hasNextPage || index < photos.length;

    const rowRenderer = ({
      key,
      parent,
      index,
      style,
      isScrolling,
      isVisible,
    }) => {
      let nextItem;
      if (!isRowLoaded({ index })) {
        nextItem = (
          <CellMeasurer
            key={key}
            cache={this.cache}
            rowIndex={index}
            columnIndex={0}
            parent={parent}
          >
            <div className="photo-feed-spinner">
              <Spinner />
            </div>
          </CellMeasurer>
        );
      } else {
        nextItem = (
          <CellMeasurer
            key={key}
            cache={this.cache}
            rowIndex={index}
            columnIndex={0}
            parent={parent}
          >
            {
              ({ measure }) => (
                <PhotoFeedItem
                  photo={photos[index]}
                  author={this.props.users[photos[index].author_id]}
                  measure={measure}
                />
              )
            }
          </CellMeasurer>
        );
      }

      return (
        <div
          key={key}
          style={style}
        >
          {nextItem}
        </div>
      );
    };

    return (
      <section className="main">
        <InfiniteLoader
          isRowLoaded={isRowLoaded}
          loadMoreRows={loadMoreRows}
          rowCount={rowCount}
          threshold={3}
        >
          {
            ({ onRowsRendered, registerChild }) => (
              <AutoSizer>
                {
                  ({ width, height }) => (
                    <List
                      className="photo-feed"
                      ref={registerChild}
                      width={width}
                      height={height}
                      rowCount={rowCount}
                      deferredMeasurementCache={this.cache}
                      rowHeight={this.cache.rowHeight}
                      rowRenderer={rowRenderer}
                      onRowsRendered={onRowsRendered}
                    />
                  )
                }
              </AutoSizer>
            )
          }
        </InfiniteLoader>
      </section>
    );
  }
}

export default PhotoFeed;
