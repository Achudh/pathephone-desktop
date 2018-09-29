import { call } from 'redux-saga/effects';
import printRenderer from '~shared/utils/printRenderer';

const handleMap = ({ albumCoverCid }) => albumCoverCid;

const getAlbumsCoversCIDs = albums => albums.map(handleMap);

function* cacheDiscoverAlbumsCovers(api, { payload }) {
  const { cacheIPFSFilesByCIDs } = api;
  const uncachedCIDs = getAlbumsCoversCIDs(payload);
  try {
    yield call(cacheIPFSFilesByCIDs, uncachedCIDs);
  } catch (e) {
    printRenderer.error(e);
  }
}

export default cacheDiscoverAlbumsCovers;
