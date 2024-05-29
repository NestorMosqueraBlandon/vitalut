import { useEffect, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import styles from './Histories.module.css';
import { useDeleteHistory, useForm, useHistories } from '@/hooks';
import { History, HistoryWithPatient } from '@vitalut/entities';
import { Inbox,  Trash, } from 'react-feather';
import {
  Button,
  Loader,
} from '@vitalut/design-system/web';
import { vitalutApi } from '@/api';
import { Entry } from './entries';
import { CreateHistory } from '@/Modals';
const Histories = () => {
  const [content, setContent] = useState('');
  const [selectedPatient, setSelectedPatient] =
    useState<Partial<HistoryWithPatient | null>>(null);
  const [search, setSearch] = useState('');

  console.log(search)
  // const { createHistory } = useCreateHistory();
  const { isLoading, count, histories } = useHistories();
  const editor = useEditor({
    extensions: [StarterKit],
    content: '',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setContent(html);
    },
  });

  const { isDeleting, deleteHistory } = useDeleteHistory();

  const {
    formState: history,
    setFormState,
  } = useForm<Partial<History | HistoryWithPatient | null>>({
    entries: [
      {
        date: new Date(),
        type: '',
        details: '',
        assessmentData: { assessmentType: '', results: '' },
      },
    ],
  });

  // const newHistory = () => {
  //   createHistory({ id: selectedPatient?.id, description: 'Descriptión' });
  // };

  useEffect(() => {
    if (editor) {
      editor.commands.setContent(selectedPatient?.description || '');
      editor.commands.focus('end');
    }
    setFormState(selectedPatient);
  }, [editor, selectedPatient]);

  useEffect(() => {
    const saveContent = async () => {
      try {
        await vitalutApi.patch('/histories', {
          id: selectedPatient?.id,
          ...history,
          description: content,
        });
        console.log('Content saved');
      } catch (error) {
        console.error('Error saving content:', error);
      }
    };

    if (content) {
      const timeoutId = setTimeout(saveContent, 3000); // Guarda automáticamente después de 1 segundo
      return () => clearTimeout(timeoutId); // Limpia el timeout si hay un nuevo cambio antes de guardar
    }
  }, [content]);

  const [selectedEntryIndex, setSelectedEntryIndex] = useState<number | null>(
    null,
  );
  const selectEntry = (index: number) => {
    setSelectedEntryIndex(index);
  };

  useEffect(() => {
    if (histories?.entries) {
      selectEntry(0);
    }
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleEntryChange = (index: number, field: string, value: any) => {
    console.log(history?.entries);
    if (history?.entries) {
      const newEntries = [...history.entries];
      const keys = field.split('.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let entry = newEntries[index] as any;
      keys.forEach((key, idx) => {
        if (idx === keys.length - 1) {
          entry[key] = value;
        } else {
          entry = entry[key];
        }
      });
      setFormState({ ...history, entries: newEntries });
    }
  };

  const addEntry = () => {
    if(history){
    setFormState({
      ...history,
      entries: [
        ...history.entries!,
        {
          date: new Date(),
          type: '',
          details: '',
          assessmentData: { assessmentType: '', results: '' },
        },
      ],
    });
  }

  };

  console.log(history);

  useEffect(() => {
    if (histories?.length > 0) {
      setSelectedPatient(histories[histories.length - 1]);
    }
  }, [histories]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div className={styles.header}>
            <div>
              <Inbox size={16} color="#6366F1" /> Historias Clínicas
              <span>{count}</span>
            </div>
            <input
              type="text"
              onChange={({ target }) => setSearch(target.value)}
              placeholder="Buscar historia"
            />
          </div>
          <div className={styles.list}>
            {histories?.map((history: HistoryWithPatient) => (
              <div
                onClick={() => setSelectedPatient(history)}
                key={history.id}
                className={styles.patient}>
                <h4>
                  {history.patientId?.firstname} {history.patientId?.lastname}
                </h4>
              </div>
            ))}
          </div>
        </div>
        {selectedPatient == null ? (
          <div className={styles.empty_container}>
            <div className={styles.empty_card}>
              <Inbox size={35} color="#6366F1" />
              <h3>¡Tiene {histories?.length} pacientes!</h3>
              <p></p>
              {/* <CreatePatient /> */}
              <CreateHistory text="Nueva Historia" />
        
            </div>
          </div>
        ) : (
          <div>
            <div className={styles.details_header}>
            <Button style={{
            marginLeft: 20
          }} variant="danger" loading={isDeleting} onClick={() => deleteHistory(selectedPatient.id || "", {
            onSuccess(){
              setSelectedPatient(null)
            }
          })}  ><Trash size={15} /> Eliminar Historia</Button>
            </div>
            <div className={styles.container_details}>
              <div className={styles.details}>
                <div className={styles.notes}>
                  <h4>Descripción General</h4>

                  <EditorContent
                    placeholder="Escribe la información general de la historia clínica"
                    className={styles.editor}
                    editor={editor}
                  />
                </div>

                <Button onClick={addEntry}>Agregar Entrada</Button>

                <div className={styles.entries}>
                  {history?.entries?.map((entry, index) => (
                    <div
                      key={entry.type + index}
                      className={`${ selectedEntryIndex == index ?  styles.active :   styles.entry}`}
                      onClick={() => selectEntry(index)}>
                      Entrada {index + 1}
                    </div>
                  ))}
                </div>

                {history?.entries?.map((entry, index) => (
                  <Entry
                    entry={entry}
                    index={index}
                    isSelected={selectedEntryIndex == index}
                    handleEntryChange={handleEntryChange}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Histories;