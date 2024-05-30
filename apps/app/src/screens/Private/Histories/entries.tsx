import { Field, Input, Textarea } from "@vitalut/design-system/web";
import { ClinicalEntry } from "@vitalut/entities";
import styles from "./Histories.module.css"

export const Entry = ({entry, index, isSelected, handleEntryChange}: { isSelected: boolean, handleEntryChange: (index: number, field: string, value: unknown) => void, entry: ClinicalEntry, index: number }) => {
   
    return (

      <div>

        {isSelected && (
          <div>
            <div className={styles.col} >

            <Field label="Fecha">
              <Input
                name={`entries[${index}].date`}
                type="date"
                onChange={({ target }) => handleEntryChange(index, 'date', new Date(target.value))}
              />
            </Field>
            <Field label="Tipo">
              <select
                value={entry.type}
                name={`entries[${index}].type`}
                onChange={({ target }) => handleEntryChange(index, 'type', target.value)}
              >
                <option value="">Seleccionar</option>
                <option value="assessment">Evaluación</option>
                <option value="session">Sesión</option>
                <option value="progressNote">Nota de progreso</option>
                <option value="medication">Medicación</option>
              </select>
            </Field>
            </div>

            {entry.type === 'assessment' && (
              <div>
                <Field label="Tipo de Evaluación">
                  <Input
                    value={entry.assessmentData?.assessmentType || ''}
                    onChange={({ target }) => handleEntryChange(index, 'assessmentData.assessmentType', target.value)}
                  />
                </Field>
                <Field label="Resultados">
                  <Textarea
                    value={entry.assessmentData?.results || ''}
                    onChange={({ target }) => handleEntryChange(index, 'assessmentData.results', target.value)}
                  />
                </Field>
              </div>
            )}
            {entry.type === 'session' && (
              <div>
                <Field label="Temas Discutidos">
                  <Textarea
                    value={entry.sessionData?.topicsDiscussed.join(', ') || ''}
                    onChange={({ target }) => handleEntryChange(index, 'sessionData.topicsDiscussed', target.value.split(', '))}
                  />
                </Field>
                <Field label="Ejercicios Realizados">
                  <Textarea
                    value={entry.sessionData?.exercisesPerformed.join(', ') || ''}
                    onChange={({ target }) => handleEntryChange(index, 'sessionData.exercisesPerformed', target.value.split(', '))}
                  />
                </Field>
              </div>
            )}
            {entry.type === 'progressNote' && (
              <div>
                <Field label="Resumen">
                  <Textarea
                    value={entry.progressNoteData?.summary || ''}
                    onChange={({ target }) => handleEntryChange(index, 'progressNoteData.summary', target.value)}
                  />
                </Field>
                <Field label="Plan de Tratamiento">
                  <Textarea
                    value={entry.progressNoteData?.treatmentPlan || ''}
                    onChange={({ target }) => handleEntryChange(index, 'progressNoteData.treatmentPlan', target.value)}
                  />
                </Field>
              </div>
            )}
            {entry.type === 'medication' && (
              <div>
                <Field label="Nombre del Medicamento">
                  <Input
                    value={entry.medicationData?.[0]?.medicationName || ''}
                    onChange={({ target }) => handleEntryChange(index, 'medicationData.0.medicationName', target.value)}
                  />
                </Field>
                <Field label="Dosificación">
                  <Input
                    value={entry.medicationData?.[0]?.dosage || ''}
                    onChange={({ target }) => handleEntryChange(index, 'medicationData.0.dosage', target.value)}
                  />
                </Field>
                <Field label="Frecuencia">
                  <Input
                    value={entry.medicationData?.[0]?.frequency || ''}
                    onChange={({ target }) => handleEntryChange(index, 'medicationData.0.frequency', target.value)}
                  />
                </Field>
                <Field label="Notas">
                  <Textarea
                    value={entry.medicationData?.[0]?.notes || ''}
                    onChange={({ target }) => handleEntryChange(index, 'medicationData.0.notes', target.value)}
                  />
                </Field>
              </div>
            )}
          </div>
        ) }
      </div>

    );
  };