import React from 'react'
import { ITask } from '../interfaces/Task'
import styles from './TaskList.module.css'

interface Props {
 tasklist: ITask[];
}

const TaskList = ({tasklist}: Props) => {
    return (
        <>
        {tasklist.length > 0 ? (
            tasklist.map((task) => (
                <div key={task.id} className={styles.task}>
                    <div className={styles.details}>
                        <h4>{task.title}</h4>
                        <p>Dificuldade: {task.difficulty}</p>
                    </div>
                    <div className={styles.actions}>
                        <i className='bi bi-pencil'></i>
                        <i className='bi bi-trash'></i>
                    </div>
                </div>
            ))
        ) : (
            <p>Não tem tarefas cadastradas</p>
        )}
        </>
    );
};

export default TaskList;