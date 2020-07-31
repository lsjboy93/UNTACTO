import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, description, video, kiosks } = useSelector(({ write }) => ({
    title: write.title,
    description: write.description,
    video: write.video,
    kiosks: write.kiosks,
  }));
  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return (
    <Editor
      onChangeField={onChangeField}
      title={title}
      description={description}
      video={video}
      kiosks={kiosks}
    />
  );
};

export default EditorContainer;
